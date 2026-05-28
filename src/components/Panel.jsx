import { useNavigate } from "react-router"

export default function Panel() {
    
    const navigate = useNavigate();

    const welcomeButton = () => {
        navigate("/");
    };

    const listButton = () => {
        navigate("/books");
    };

    const newButton = () => {
        navigate("/new");
    }

    return (
        <>
            <nav className="flex flex-col gap-10 bg-gray-100 py-5 md:py-10 px-5 md:min-h-screen">
                <h1 className="text-3xl font-bold text-left md:text-center text-gray-800">Library Management App</h1>
                <section className="flex flex-col gap-4 px-2 text-lg font-semibold text-blue-500">
                    <button className="text-left hover:text-blue-700 hover:cursor-pointer" onClick={welcomeButton}>Welcome</button>
                    <button className="text-left hover:text-blue-700 hover:cursor-pointer" onClick={listButton}>List All Books</button>
                    <button className="text-left hover:text-blue-700 hover:cursor-pointer" onClick={newButton}>Add New Book</button>
                </section>
            </nav>
        </>
    )
}