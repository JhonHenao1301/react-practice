
import { useNavigate} from "react-router-dom"
import { useState } from "react"

export default function TodoForm (props) {

    const navigate = useNavigate()
    // const [ inputValue, setInputValue] = useState(state[id].title)
    // const [ inputValue, setInputValue] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: inputActive,
            completed: false
        }
        dispatch({
            type: 'ADD',
            payload: newTodo
        })
        setInputActive('')
        setOpenModal(!openModal)
    }

    return ( 
        <div className="flex flex-col gap-8 items-center p-4">
            <p className="text-lg font-semibold">
                {props.label}
            </p>
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 justify-center items-center">
                <input
                    className="input h-10"
                    onChange={(e) => setInputActive(e.target.value)}
                />
                <div className="flex flex-row items-center gap-4">
                    <button
                        type='submit'
                        className='text-button'>
                        Save
                    </button>
                    <button
                        type='text'
                        onClick={() => navigate("/")}
                        className='text-button'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}