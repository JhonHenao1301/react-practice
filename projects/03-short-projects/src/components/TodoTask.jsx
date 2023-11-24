
 import { useState } from 'react'
 import { EditIcon, DeleteIcon } from '../assets/Icons/Icons.jsx'
 
 export default function TodoTask({ task, onUpdate, onDelete }) {
    const [ editMode, setEditMode ] = useState(false)
    const [ inputValue, setInputValue] = useState(task)

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
    return (
        <div>
            {
                editMode
                ? 
                <form className="taskEditor" onSubmit={handleSubmitUpdate}>
                    <input type='text' defaultValue={task.title} onChange={handleChange}/>
                    <button alt='Save' type='submit'>
                        <ion-icon name="save-outline"></ion-icon>
                    </button>
                </form>
                : 
                <div className='flex gap-8 max-w-md'>
                    <label className="flex gap-4 flex-1">
                        <input type="checkbox" name="checkbox" />
                        {task.title}
                    </label>
                    <div className="flex gap-2">
                        <button alt='Edit' className='editButton' onClick={() => setEditMode(!editMode)}>
                            <EditIcon />
                        </button>
                        <button 
                            alt='Delete' 
                            className='deleteButton' 
                            onClick={handleClickDelete}
                        >
                            <DeleteIcon />
                        </button>
                    </div> 
                </div>
            }
        </div>
    )
 }
 