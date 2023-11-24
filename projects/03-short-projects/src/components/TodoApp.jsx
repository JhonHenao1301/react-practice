
import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoTask from './TodoTask'
import { AddIcon } from '../assets/Icons/Icons'
import { useState } from 'react'

//     .taskBoard {
//         inline-size: 26rem;
//         border: 1px solid #eee;
//         padding-inline: 2rem;
//         padding-block: 2rem .5rem;
//         border-radius: .75rem;
//         background: #001;
//         box-shadow: rgba(255, 255, 255, .5) 0px 8px 12px, rgba(253, 253, 246, .5) 0px 15px 12px;
//     }
//     .taskList {
//         display: flex;
//         flex-direction: column;
//         max-block-size: 20rem;
//         overflow-y: auto;
//         scroll-behavior: smooth;
//     }
//     .taskLength {
//         font-weight: 700;
//         color: #fff2f2a0;
//         margin-block-start: 4rem;
//     }
// `

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
        <div className="flex flex-col gap-8 mt-12">
            <TodoHeader>
                <h1 className="text-4xl font-semibold text-center">
                    TODO Machine
                </h1>
            </TodoHeader>

            <TodoForm>
                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-row gap-4 justify-center">
                    <input
                        onChange={handleInputChange} 
                        className='rounded-md text-black-20 p-2' 
                        value={taskItemValue}/>
                    <button
                        type='submit' 
                        className='submitButton'> 
                        <AddIcon />
                    </button>
                </form>
            </TodoForm>

            <div className="taskBoard">
                <div className="flex flex-col gap-4">
                    { 
                        taskList?.map((task) => {
                            return (
                                <TodoTask 
                                    key={task.id} 
                                    task={task} 
                                    onUpdate={handleUpdate} 
                                    onDelete={handleDelete} 
                                /> 
                            )
                        })
                    }
                </div>
                <p className='mt-8'>{taskList.length} tasks</p>
            </div>
        </div>
    )
}

export default TodoApp
