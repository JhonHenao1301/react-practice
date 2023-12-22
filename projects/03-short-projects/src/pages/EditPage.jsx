
import { useState, useReducer } from "react"
import { todoReducer, initialState } from "../useHooks/useTodo"
import { SaveIcon } from '../assets/Icons/Icons'
import { useNavigate, useParams } from "react-router-dom"
import TodoForm from "../components/TodoForm"

export default function EditPage () {
    
    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    const navigate = useNavigate()
    const id = useParams()
    // console.log(state)

    const handleUpdate = (idTask2, newValue) => {
        dispatch({
            type: 'UPDATE',
            payload: {
                idTask2,
                newValue
            }
        })
    }

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmitUpdate(e) {
        e.preventDefault()
        handleUpdate(task.id, inputValue)
        navigate("/")
    }

    // console.log(state)
    
    return ( 
        // <div>
        //     <form className="flex gap-4" onSubmit={handleSubmitUpdate}>
        //         <input
        //             type='text'
        //             className='rounded-md py-2 px-4 text-gray-20'
        //             defaultValue={state[id]?.title} 
        //             onChange={handleChange}
        //         />
        //         <button alt='Save' type='submit'>
        //             <SaveIcon />
        //         </button>
        //     </form>
        // </div>
        <TodoForm 
            label="Edit the task"
        />
    )
}