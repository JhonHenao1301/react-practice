
 import { useState } from 'react'
 import { EditIcon, DeleteIcon, CheckIcon } from '../assets/Icons/Icons.jsx'
 
 export default function TodoTask({ task, onUpdate, onDelete }) {
    const [ editMode, setEditMode ] = useState(false)
    const [ inputValue, setInputValue] = useState(task)
    const [ checked, setChecked ] = useState(false)

    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function handleSubmitUpdate(e) {
        e.preventDefault()
        onUpdate(task.id, inputValue)
        setEditMode(!editMode)
    }
    function handleClickDelete() {
        onDelete(task)
    }
    function handleCheck() {
        setChecked(!checked)
    }
    return (
        <div>
            {
                editMode
                ? 
                <form className="" onSubmit={handleSubmitUpdate}>
                    <input 
                        type='text'
                        className='p-2 text-gray-10'
                        defaultValue={task.title} 
                        onChange={handleChange}
                    />
                    <button alt='Save' type='submit'>
                        <ion-icon name="save-outline"></ion-icon>
                    </button>
                </form>
                :
                <div className='flex gap-12 max-w-md'>
                    <label 
                        className={`flex gap-4 flex-1 ${checked ? 'line-through decoration-white-10' : ''}` }>
                        {
                            checked ? (
                                <button onClick={() => setChecked(!checked)}>
                                    <CheckIcon />
                                </button>
                            )
                            : <input 
                                type="radio"
                                onClick={handleCheck}
                                name='checkbox' />
                        }
                        {task.title}
                    </label>
                    <div className="flex gap-2">
                        <button 
                            alt='Edit' 
                            className={`disabled:text-gray-5`}
                            onClick={() => setEditMode(!editMode)}
                            disabled={checked}
                        >
                            <EditIcon />
                        </button>
                        <button 
                            alt='Delete' 
                            className={`disabled:text-gray-5`} 
                            onClick={handleClickDelete}
                            disabled={checked}
                        >
                            <DeleteIcon />
                        </button>
                    </div> 
                </div>
            }
        </div>
    )
 }
 