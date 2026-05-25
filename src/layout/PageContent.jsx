import {Routes, Route} from "react-router"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import BookDetail from "../pages/BookDetail"

export default function PageContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="books/:id" element={<BookDetail />}/>
            </Routes>
        </main>
    )
}