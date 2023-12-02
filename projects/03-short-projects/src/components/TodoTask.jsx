
 import { useState } from 'react'
 import { EditIcon, DeleteIcon, CheckIcon, SaveIcon } from '../assets/Icons/Icons.jsx'
 
 export default function TodoTask(props) {
    const { task, onUpdate, onDelete, onDone } = props
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
        // setChecked(!checked)
        onDone(task.id)
    }

    function done() {
        return task.completed === true ? 'line-through decoration-white-10' : ''
    }


    // let searchedTodos = [];

    // if (!searchValue.length >= 1) {
    // searchedTodos = todos;
    // } else {
    // searchedTodos = todosArray.filter(todo => {
    //     const todoText = todo.text.toLowerCase();
    //     const searchText = searchValue.toLowerCase();
    //     return todoText.includes(searchText);
    // });
    // }

    return (
        <div>
            {
                editMode
                ? 
                <form className="flex gap-4" onSubmit={handleSubmitUpdate}>
                    <input
                        type='text'
                        className='rounded-md py-2 px-4 text-gray-20'
                        defaultValue={task.title} 
                        onChange={handleChange}
                    />
                    <button alt='Save' type='submit'>
                        <SaveIcon />
                    </button>
                </form>
                :
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
                            onClick={() => setEditMode(!editMode)}
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
 