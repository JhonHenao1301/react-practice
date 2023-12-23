
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EditPage from "./pages/EditPage"
import NewTodoPage from "./pages/NewTodoPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

    return (
        <div className="flex justify-center item-center p-8 min-h-screen text-white-10">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path="/newTodo" element={<NewTodoPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App