import { useNavigate } from "react-router"

export default function Welcome() {
    
    const navigate = useNavigate();

    const welcomeButton = () => {
        navigate("/books");
    };
    
    return (
        <>
            <section className="flex flex-col items-center gap-10 md:min-w-[80vw] min-h-[80vh] md:min-h-screen justify-center bg-gray-50">
                <h1 className="text-5xl font-bold text-center text-gray-800">WELCOME</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-700">Please use the panel to list books or add a new book.</h2>
            </section>
        </>
    )
}