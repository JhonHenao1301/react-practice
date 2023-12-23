
import { useLocation, useParams } from "react-router-dom"
import TodoForm from "../components/TodoForm"
import { UseTodo } from "../useHooks/UseTodo"

export default function EditPage () {
    
    const location = useLocation()
    const { id } = useParams()
    const { getTodo, updateTodo } = UseTodo()
    let todoText
    
    if(location.state?.task) {
        const titleTask = location.state.task.title
        todoText = titleTask
    }
    else {
            const todoElement = getTodo(id)
            todoText = todoElement
        }

    return ( 
        <TodoForm 
            label="Edit the task"
            defaultTodoText={todoText}
            onUpdate={(newText) => updateTodo(id, newText)}
        />
    )
}