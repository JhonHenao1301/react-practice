
import TodoHeader from '../components/TodoHeader'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoListEmpty from '../components/TodoListEmpty'
import TodoTask from '../components/TodoTask'
import Modal from '../components/Modal'
import { initialState, todoReducer } from '../useHooks/useTodo'
import { AddIcon, CancelIcon } from '../assets/Icons/Icons'
import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TodoApp() {

    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    const [ inputActive, setInputActive ] = useState('')
    const navigate = useNavigate()

    const handleEdit = (id) => {
        // navigate(`/edit/${id}`)
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
    
    function counter(list) {
        let count = 0
        list.map(itemList => 
            itemList.completed === true ? count++ : count
        )
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
                                                onEdit={handleEdit(task.id)} 
                                                onDelete={handleDelete}
                                                onDone={handleDone} 
                                            />
                                        )
                                    })
                            }
                        </div>
                    </div>
                </TodoList>    
                <button
                    className="fixed bottom-8 right-8" 
                    onClick={() => navigate('/newTodo')}>
                        <AddIcon />
                </button> 
            </div>
        </div>
    )
}

export default TodoApp
