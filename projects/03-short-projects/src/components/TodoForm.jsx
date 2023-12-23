
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function TodoForm (props) {

    const navigate = useNavigate()
    const { onUpdate, handleSubmit } = props
    const [ inputValue, setInputValue] = useState(props.defaultTodoText || '')

    function onChange(e) {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(inputValue)
        navigate('/')
    }

    return ( 
        <div className="flex flex-col gap-8 items-center p-4">
            <p className="text-lg font-semibold">
                {props.label}
            </p>
            <form 
                onSubmit={onSubmit}
                className="flex flex-col gap-6 justify-center items-center">
                <input
                    defaultValue={inputValue}
                    className="input h-10"
                    onChange={onChange}
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