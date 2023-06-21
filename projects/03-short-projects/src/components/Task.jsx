/* eslint-disable react/prop-types */
 
 import styled from 'styled-components'
 import { FaPenSquare, FaTrash, FaSave } from 'react-icons/fa'
 import { useState } from 'react'
 
 const TaskStyled = styled.div`
    border-bottom: 1px solid #eee;
    padding-block: .25rem;
    .taskEditor {
        display: flex;
        gap: 2rem;
        margin-block-end: 1rem;
    }
    .task {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
    .taskItem {
        inline-size: 12rem;
    }
    .actions {
        display: flex;
        gap: 1rem;
    }
    button {
        border-radius: .5rem;
        border: 1px solid white;
        padding: .5rem;
        display: flex;
        color: white;
        font: var(--font-button);
        cursor: pointer;
    }
    .editButton {
        background: #005e9c;
    }
    .deleteButton {
        background: #770101;
    }
 `
 
 // eslint-disable-next-line react/prop-types
 function Task({ task, onUpdate, onDelete }) {
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
        <TaskStyled>
            {
                editMode
                ? 
                <form className="taskEditor" onSubmit={handleSubmitUpdate}>
                    <input type='text' defaultValue={task.title} onChange={handleChange}/>
                    <button alt='Save' type='submit'>
                        <FaSave color='#78d1f5'/>
                    </button>
                </form>
                : 
                <div className='task'>
                    <p className='taskItem'>{task.title}</p>
                    <div className="actions">
                        <button alt='Edit' className='editButton' onClick={() => setEditMode(!editMode)}>
                            <FaPenSquare color='#ffe'/>
                        </button>
                        <button alt='Delete' className='deleteButton' onClick={handleClickDelete}>
                            <FaTrash color='#ffe' />
                        </button>
                    </div> 
                </div>
            }
        </TaskStyled>
    )
 }
 
 export default Task
 