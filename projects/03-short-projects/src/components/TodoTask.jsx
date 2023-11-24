/* eslint-disable react/prop-types */
 
 import styled from 'styled-components'
 import { useState } from 'react'
 
 const TodoTaskStyled = styled.div`
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
        flex: 1;
    }
    .form-control {
        inline-size: 100%;
        font-family: system-ui, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 2rem;
    }
    input[type="checkbox"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        /* Remove most all native input styles */
        appearance: none;
        /* For iOS < 15 */
        background-color: var(--form-background);
        /* Not removed via appearance */
        margin: 0;

        font: inherit;
        color: currentColor;
        width: .5em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);

        display: grid;
        place-content: center;
    }
    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }
    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    input[type="checkbox"]:focus {
        outline: max(2px, 0.15em) solid currentColor;
        outline-offset: max(2px, 0.15em);
    }

    input[type="checkbox"]:disabled {
        --form-control-color: var(--form-control-disabled);
        color: var(--form-control-disabled);
        cursor: not-allowed;
    }

    .actions {
        display: flex;
        gap: .5rem;
    }
    button {
        padding: .5rem;
        background: transparent;
        font: var(--font-button);
        cursor: pointer;
        color: black;
    }
    ion-icon {
        color: white;
        font-size: 1.5rem;
    }
 `
 
 // eslint-disable-next-line react/prop-types
 function TodoTask({ task, onUpdate, onDelete }) {
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
        <TodoTaskStyled>
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
                <div className='task'>
                    <label className="form-control">
                        <input type="checkbox" name="checkbox" />
                        {task.title}
                    </label>
                    <div className="actions">
                        <button alt='Edit' className='editButton' onClick={() => setEditMode(!editMode)}>
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button alt='Delete' className='deleteButton' onClick={handleClickDelete}>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div> 
                </div>
            }
        </TodoTaskStyled>
    )
 }
 
 export default TodoTask
 