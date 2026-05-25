import { BookContext } from "../context/BookContext"
import { useContext } from "react"
import { useNavigate } from "react-router"

export default function AllBooks() {
    
    const {books} = useContext(BookContext);
    
    const navigate = useNavigate();
    
    return (
        <>
            <section className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr className="text-lg font-semibold">
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Author</th>
                            <th className="px-4 py-2 text-left">Condition</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id} className="border-t hover:bg-gray-50 hover:cursor-pointer" onClick={() => navigate(`/books/${book.id}`)}>
                                <td className="px-4 py-2">{book.title}</td>
                                <td className="px-4 py-2">{book.author}</td>
                                <td className="px-4 py-2">{book.condition}</td>
                                <td className={`px-4 py-2 ${book.available ? "text-green-500" : "text-red-500"}`}>
                                    {book.available ? "Available" : "Lent"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}