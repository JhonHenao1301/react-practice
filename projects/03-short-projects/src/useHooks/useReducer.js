
const initialState = JSON.parse(window.localStorage.getItem('TODO_V1')) || []

const actionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    DONE: 'DONE',
    UPDATE: 'UPDATE'
}

//Update localStorage
const updateLocalStorage = (state) => {
    console.log('sdsd')
    window.localStorage.setItem('TODO_V1', JSON.stringify(state))
}

const todoReducer = (state, action) => {
    switch(action.type) {
        case actionTypes.ADD :
            const newState = [
                ...state,
                action.payload
            ]
            console.log(newState)
            updateLocalStorage(newState)
            return newState
            
        case actionTypes.DELETE :
            const { id } = action.payload
            const newStateDeleted = state.filter(item => item.id !== id)
            updateLocalStorage(newStateDeleted)
            return newStateDeleted

        case actionTypes.DONE :
            const idTask = action.payload
            const index = state.findIndex(item => item.id === idTask)
            state[index].completed = true
            const newStateDone = state
            updateLocalStorage(newStateDone)
            return newStateDone

        case actionTypes.UPDATE :
            const { idTask2, newValue }  = action.payload
            const index2 = state.findIndex(item => item.id === idTask2)
            state[index2].title = newValue
            const newStateUpdated = state
            updateLocalStorage(newStateUpdated)
            return newStateUpdated

        default: 
            return {
                ...state,
            }
    }
}

export { initialState, todoReducer }