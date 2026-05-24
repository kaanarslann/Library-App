import { useNavigate } from "react-router"

export default function Panel() {
    
    const navigate = useNavigate();

    const listButton = () => {
        navigate("/home");
    };

    return (
        <>
            <nav className="flex flex-col gap-10 bg-gray-100 py-5 md:py-10 px-5 md:min-h-screen">
                <h1 className="text-3xl font-bold text-left md:text-center text-gray-800">Library Management App</h1>
                <section className="flex flex-col gap-4 px-2 text-lg">
                    <button className="text-left" onClick={listButton}>List All Books</button>
                    <button className="text-left">Add New Book</button>
                    <button className="text-left">WIP</button>
                </section>
            </nav>
        </>
    )
}