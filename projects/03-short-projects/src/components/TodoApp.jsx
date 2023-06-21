
import styled from 'styled-components'
import Task from './Task'
import { useState } from 'react'

const TodoAppStyled = styled.div`
    margin-block-start: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
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
`

// eslint-disable-next-line react/prop-types
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
                title:  taskItemValue
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
        const itemTitle = item.title
        const index = temp.findIndex((itemTemp) => itemTemp.id == itemTitle)
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
            <div className="taskList">
                { 
                    taskList?.map((task) => {
                        return (
                            <Task key={task.id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} /> 
                        )
                    }) 
                }
            </div>
        </TodoAppStyled>
    )
}

export default TodoApp
