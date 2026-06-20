import { useParams } from "react-router"
import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import Button from "../components/Button"

export default function BookDetail() {
    
    const {id} = useParams();
    const {books, deleteBook} = useContext(BookContext);
    const navigate = useNavigate();

    const book = books.find((b) => b.id === Number(id));

    const deleteButton = (id) => {
        deleteBook(id);
        toast.success("Book deleted successfully!");
        navigate("/books");
    }

    if(!book) {
        return <p>Book not found!</p>;
    }
    
    return (
        <>
            <section className="flex justify-center mt-10">
                <section className="border-2 border-gray-700 bg-gray-50 px-10 py-5 flex flex-col gap-5 w-fit rounded-xl">
                    <h1 className="text-2xl font-bold pb-5">{book.title}</h1>
                    <div className="grid grid-cols-[150px_1fr] gap-y-5 text-lg">
                        <h2 className="font-semibold">Author</h2>
                        <h2>{book.author}</h2>

                        <h2 className="font-semibold">Year</h2>
                        <h2>{book.year}</h2>

                        <h2 className="font-semibold">Condition</h2>
                        <h2>{book.condition}</h2>

                        <h2 className="font-semibold">Status</h2>
                        <h2 className={`${book.available ? "text-green-500" : "text-red-500"}`}>
                            {book.available ? "Available" : "Lent"}
                        </h2>
                    </div>
                    <div className="flex gap-3 justify-end pt-5">
                        <Button color="save" func={() => navigate(`/books/${book.id}/update`)}>Update</Button>
                        <Button color="delete" func={() => deleteButton(book.id)}>Delete</Button>
                    </div>
                </section>
            </section>
        </>
    )
}