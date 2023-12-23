
 import { useState } from 'react'
 import { EditIcon, DeleteIcon, CheckIcon } from '../assets/Icons/Icons.jsx'
 
 export default function TodoTask(props) {
    const { task, onUpdate, onDelete, onDone } = props
    // const [ editMode, setEditMode ] = useState(false)

    const [ checked, setChecked ] = useState(false)

    function handleClickDelete() {
        onDelete(task)
    }
    function handleCheck() {
        setChecked(!checked)
        onDone(task.id)
    }

    function done() {
        return task.completed === true ? 'line-through decoration-white-10' : ''
    }

    return (
        <div>
            {
                <div className='flex gap-24'>
                    <label 
                        className={`flex items-center gap-4 flex-1 ${done}` }>
                        {
                            task.completed === true ?
                                <button>
                                    <CheckIcon />
                                </button>
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
                            onClick={onUpdate}
                            disabled={checked}
                        >
                            <EditIcon />
                        </button>
                        <button 
                            alt='Delete' 
                            className={`disabled:text-gray-5`} 
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
 