
import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoTask from './TodoTask'
import Modal from './Modal'
import { AddIcon } from '../assets/Icons/Icons'
import { useState } from 'react'

function TodoApp() {
    const [ taskList, setTaskList ] = useState([])
    const [ taskItemValue, setTaskItemValue ] = useState('')
    const [ openModal, setOpenModal ] = useState(false)

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
            setOpenModal(!openModal)
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
        <div>
            <div 
                className="flex flex-col gap-8 mt-12">
                <TodoHeader>
                    <h1 className="text-4xl font-semibold text-center">
                        TODO Machine
                    </h1>
                </TodoHeader>
                
                <TodoList>
                    <div className="task-list rounded-md p-8 min-w-full max-w-screen-sm">
                        <div className="flex flex-col gap-6">
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
                </TodoList>
                <button
                    className="fixed bottom-8 right-8" 
                    onClick={() => setOpenModal(!openModal)}>
                        <AddIcon />
                </button>
            </div>
            {   openModal && (
                    <Modal>
                        <TodoForm>
                            <h2 className="text-md font-semibold">
                                Add the new task
                            </h2>
                            <form 
                                onSubmit={handleSubmit}
                                className="flex flex-row gap-4 justify-center">
                                <input
                                    onChange={handleInputChange} 
                                    className='rounded-md text-gray-20 p-2' 
                                    value={taskItemValue}/>
                                <button
                                    type='submit' 
                                    className='submitButton'> 
                                    <AddIcon />
                                </button>
                            </form>
                        </TodoForm>
                    </Modal>         
                )
            }
        </div>
    )
}

export default TodoApp
