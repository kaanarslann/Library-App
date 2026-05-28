import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import BookForm from "../components/BookForm"

export default function EditBook() {
    
    const {id} = useParams();
    const {books, updateBook} = useContext(BookContext);
    const navigate = useNavigate();

    const book = books.find((b) => b.id === Number(id));

    const defaultValues = {book}

    const onSubmit = (data) => {
        updateBook({
            ...data,
            available: data.available === "true",
        });
        toast.success("Book updated successfully!");
        navigate("/books");
    }
    
    return (
        <>
            <BookForm key={defaultValues?.id ?? "new"} defaultValues={defaultValues} onSubmit={onSubmit}/>
        </>
    )
}