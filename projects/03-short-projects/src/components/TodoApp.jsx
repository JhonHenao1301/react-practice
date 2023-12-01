
import TodoHeader from './TodoHeader'
// import TodoSearch from './TodoSearch'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoListEmpty from './TodoListEmpty'
import TodoTask from './TodoTask'
import Modal from './Modal'
import { initialState, todoReducer } from '../useHooks/useTodo'
import { AddIcon, CancelIcon } from '../assets/Icons/Icons'
import { useReducer, useState } from 'react'

function TodoApp() {

    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    const [ openModal, setOpenModal ] = useState(false)
    const [ inputActive, setInputActive ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: inputActive,
            completed: false
        }
        dispatch({
            type: 'ADD',
            payload: newTodo
        })
        setInputActive('')
        setOpenModal(!openModal)
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    const handleDone = (id) => {
        dispatch({
            type: 'DONE',
            payload: id
        })
    }

    const handleUpdate = (idTask2, newValue) => {
        dispatch({
            type: 'UPDATE',
            payload: {
                idTask2,
                newValue
            }
        })
    }
    
    function counter(list) {
        let count = 0
        list.map(itemList => {
            itemList.completed === true ? count++ : count
        })
        return count
    }

    function stateLength(list) {
        return list.length
    }

    return (
        <div>
            <div
                className="flex flex-col gap-8 mt-12">
                <TodoHeader>
                    <h1 className="text-4xl font-semibold text-center">
                        TODO Machine
                    </h1>
                    <h3 className="font-medium">
                        {counter(state)} completed of {stateLength(state)}
                    </h3>
                </TodoHeader>
                                
                <TodoList>
                    <div className="p-4">
                        <div className="flex flex-col gap-6">
                            {
                                !state.length > 0 
                                    ?  <TodoListEmpty />
                                    :
                                    state?.map((task) => {
                                        return (
                                            <TodoTask 
                                                key={task.id} 
                                                task={task} 
                                                onDelete={handleDelete}
                                                onDone={handleDone}
                                                onUpdate={handleUpdate} 
                                            />
                                        )
                                    })
                            }
                        </div>
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
                        <button 
                            className="right-0 relative"
                            onClick={() => setOpenModal(!openModal)}
                        >
                            <CancelIcon />  
                        </button>
                        <TodoForm>
                            <h2 className="text-md font-semibold">
                                Add the new task
                            </h2>
                            <form 
                                onSubmit={handleSubmit}
                                className="flex flex-row gap-4 justify-center">
                                <input
                                    onChange={(e) => setInputActive(e.target.value)}
                                    className='input'
                                />
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
