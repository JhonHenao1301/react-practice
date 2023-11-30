
export const initialState = []

const actionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    DONE: 'DONE'
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
            const { idTask } = action.payload
            const task = state.filter(item => item.id === idTask)
            console.log(idTask)
            return [
                ...state
            ]
        default: 
            return {
                ...state,
            }
    }
}