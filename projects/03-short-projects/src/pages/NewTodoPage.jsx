
import TodoForm from "../components/TodoForm"
import { UseTodo } from "../useHooks/UseTodo"

export default function NewTodoPage() {

    const { addTodo } = UseTodo()
    return ( 
        <TodoForm
            label="Add the new task"
            handleSubmit={(input) => addTodo(input)}
        />
    )
}