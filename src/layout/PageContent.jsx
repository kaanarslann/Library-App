import {Routes, Route} from "react-router"
import Welcome from "../pages/Welcome"
import BookDetail from "../pages/BookDetail"
import AllBooks from "../pages/AllBooks"
import NewBook from "../pages/NewBook"
import EditBook from "../pages/EditBook"

export default function PageContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/books" element={<AllBooks />}/>
                <Route path="/books/:id" element={<BookDetail />}/>
                <Route path="/new" element={<NewBook />}/>
                <Route path="/books/:id/update" element={<EditBook />}/>
            </Routes>
        </main>
    )
}