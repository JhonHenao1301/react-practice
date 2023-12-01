
export const initialState = []

const actionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    DONE: 'DONE',
    UPDATE: 'UPDATE'
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case actionTypes.ADD :
            return [
                ...state,
                action.payload
            ]
        case actionTypes.DELETE :
            const { id } = action.payload
            return state.filter(item => item.id !== id)

        case actionTypes.DONE :
            const idTask = action.payload
            const index = state.findIndex(item => item.id === idTask)
            state[index].completed = true
            return state

        case actionTypes.UPDATE :
            const { idTask2, newValue }  = action.payload
            const index2 = state.findIndex(item => item.id === idTask2)
            state[index2].title = newValue
            return state

        default: 
            return {
                ...state,
            }
    }
}