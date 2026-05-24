import {Routes, Route} from "react-router"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"

export default function PageContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </main>
    )
}