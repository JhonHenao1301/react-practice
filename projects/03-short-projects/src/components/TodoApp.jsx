
import TodoHeader from './TodoHeader'
import TodoSearch from './TodoSearch'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoTask from './TodoTask'
import Modal from './Modal'
import { AddIcon } from '../assets/Icons/Icons'
import { useReducer } from 'react'

const initialState = {
    openModal: false,
    value: '',
    TodoList: [],
    deleted: false,
}

const actionTypes = {
    OPEN_MODAL: 'OPEN_MODAL',
    CHANGE_INPUT: 'CHANGE_INPUT',
    ADD: 'ADD',
    DELETE: 'DELETE',
}

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.OPEN_MODAL : 
            return {
                ...state,
                openModal: true
            }
        case actionTypes.CHANGE_INPUT : 
            return {
                ...state,
                value: action.value
            }
        case actionTypes.ADD : 
            return {
                ...state,
                openModal: false,
                newTodo: action.newTodo,
                value: ''
            }
        case actionTypes.DELETE :
            return {
                ...state,
                deleted: true
            }
        default: 
            return {
                ...state,
            }
    }
}

function TodoApp() {
    // const [ taskList, setTaskList ] = useState([])
    // const [ taskItemValue, setTaskItemValue ] = useState('')
    // const [ openModal, setOpenModal ] = useState(false)
    // const [ taskListFiltered, setTaskListFiltered ] = useState()

    // function handleInputChange(event) {
    //     const value = event.target.value
    //     setTaskItemValue(value)
    // }
    // function handleUpdate(key, taskValue) {
    //     const temp = [...taskList]
    //     const item = temp.find(item => item.id === key)
    //     item.title = taskValue
    //     setTaskList(temp)     
    // }
    // function handleDelete(item) {
    //     const temp = [...taskList]
    //     const index = temp.findIndex((itemTemp) => itemTemp === item)
    //     temp.splice(index, 1)
    //     setTaskList(temp)
    // }
    // function handleDone(key) {
    //     const temp = [...taskList]
    //     const item = temp.find(item => item.id === key)
    //     item.completed = true
    //     setTaskList(temp)
    // }
    // const completedTasks = taskList.filter(task => !!task.completed).length;

    // const { filteredTasks, searchText, setSearchText } = useTodos(taskList)

    const [ state, dispatch ] = useReducer(reducer, initialState) 

    const handleClickModal = () => {
        dispatch({ type: 'OPEN_MODAL'})
    }

    const handleInputChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT',
            value: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: state.value,
            completed: false
        }
        const newTaskList = [] 
        newTaskList.push(newTodo)
        dispatch({
            type: 'ADD',
            newTodo: newTaskList 
        })
    }

        // if(taskItemValue.trim() !== '') {
        // setTaskList([
        //     ...taskList,
        //     newToDo
        // ])
        // setTaskItemValue('')
        // setOpenModal(!openModal)

    return (
        <div>
            <div
                className="flex flex-col gap-8 mt-12">
                <TodoHeader>
                    <h1 className="text-4xl font-semibold text-center">
                        TODO Machine
                    </h1>
                    <TodoSearch
                        // searchText={searchText}
                        // setSearchText={setSearchText}
                    />
                    {/* <p className='text-center'>{completedTasks} tasks of {taskList.length} tasks</p> */}
                </TodoHeader>
{/*                 
                <TodoList>
                    <div className="rounded-md p-8 min-w-full max-w-screen-sm">
                        <div className="flex flex-col gap-6">
                            {
                                filteredTasks?.map((task) => {
                                    return (
                                        <TodoTask 
                                            key={task.id} 
                                            task={task} 
                                            onUpdate={handleUpdate} 
                                            onDelete={handleDelete}
                                            onDone={handleDone}
                                        /> 
                                    )
                                })
                            }
                        </div>
                    </div>
                </TodoList> */}
                <button
                    className="fixed bottom-8 right-8" 
                    onClick={handleClickModal}>
                        <AddIcon />
                </button> 
            </div>
            {   state.openModal && (
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
