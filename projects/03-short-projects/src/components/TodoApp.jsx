
import styled from 'styled-components'
import Task from './Task'
import { useState } from 'react'

const TodoAppStyled = styled.div`
    margin-block-start: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    form {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    .submitButton {
        background: #01584a;
        border: 1px solid black;
        border-radius: .5rem;
        padding: 0.5rem 1rem;
        font: var(--font-button);
        color: white;
    }
    .taskBoard {
        inline-size: 26rem;
        border: 1px solid #eee;
        padding-inline: 2rem;
        padding-block: 2rem .5rem;
        border-radius: .75rem;
        background: #001;
        box-shadow: rgba(255, 255, 255, .5) 0px 8px 12px, rgba(253, 253, 246, .5) 0px 15px 12px;
    }
    .taskList {
        max-block-size: 20rem;
        inline-size: inherit;
        overflow-y: auto;
        scroll-behavior: smooth;
    }
    .taskLength {
        font-weight: 700;
        color: #fff2f2a0;
        margin-block-start: 4rem;
    }
`

function TodoApp() {
    const [ taskList, setTaskList ] = useState([])
    const [ taskItemValue, setTaskItemValue ] = useState('')

    function handleInputChange(event) {
        const value = event.target.value
        setTaskItemValue(value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(taskItemValue.trim() !== '') {
            const newToDo = { 
                id:     crypto.randomUUID(),
                title:  taskItemValue,
                completed: false
            }
            setTaskList([
                ...taskList,
                newToDo
            ])
            setTaskItemValue('')
        } return
    }
    function handleUpdate(key, taskValue) {
        const temp = [...taskList]
        const item = temp.find(item => item.id === key)
        item.title = taskValue
        setTaskList(temp)        
    }
    function handleDelete(item) {
        const temp = [...taskList]
        const index = temp.findIndex((itemTemp) => itemTemp === item)
        temp.splice(index, 1)
        setTaskList(temp)
    }
    return (
        <TodoAppStyled>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} className='todoInput' value={taskItemValue}/>
                <button
                    type='submit' 
                    className='submitButton'> 
                    Add task 
                </button>
            </form>
            <div className="taskBoard">
                <div className="taskList">
                    { 
                        taskList?.map((task) => {
                            return (
                                <Task key={task.id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} /> 
                            )
                        })
                    }
                </div>
                <p className='taskLength'>{taskList.length} tasks</p>
            </div>
        </TodoAppStyled>
    )
}

export default TodoApp
