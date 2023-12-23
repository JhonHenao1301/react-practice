
import { useReducer } from "react"
import { initialState, todoReducer } from "./useReducer"

function UseTodo() {
    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    
    const getTodo = (id) => {
        const todoIndex = state.findIndex(todo => todo.id === id)
        return state[todoIndex]
    }

    const addTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            title: text,
            completed: false
        }
        dispatch({
            type: 'ADD',
            payload: newTodo
        })
    }

    const updateTodo = (idTask2, newValue) => {
        dispatch({
            type: 'UPDATE',
            payload: {
                idTask2,
                newValue
            }
        })
    }

    return { getTodo, updateTodo, addTodo }
}

export { UseTodo }