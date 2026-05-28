import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import BookForm from "../components/BookForm"


export default function NewBook() {
    
    const {addBook} = useContext(BookContext);
    const navigate = useNavigate();

    const defaulValues = {
            title: "",
            author: "",
            year: "",
            condition: "",
            available: "",
        }

    const onSubmit = (data) => {
        addBook({
            ...data,
            available: data.available === "true",
        });
        toast.success("Book added successfully!");
        navigate("/books");
    }
    
    return (
        <>
            <BookForm defaultValues={defaulValues} onSubmit={onSubmit}/>
        </>
    )
}