import {Routes, Route} from "react-router"
import Welcome from "../pages/Welcome"
import BookDetail from "../pages/BookDetail"
import AllBooks from "../pages/AllBooks"

export default function PageContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/books" element={<AllBooks />}/>
                <Route path="/books/:id" element={<BookDetail />}/>
            </Routes>
        </main>
    )
}