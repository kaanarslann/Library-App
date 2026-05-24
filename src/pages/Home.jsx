import { BookContext } from "../context/BookContext"
import { useContext } from "react"

export default function Home() {
    
    const {books, deleteBook} = useContext(BookContext);

    
    return (
        <>
            <section className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr className="text-lg font-semibold">
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Author</th>
                            <th className="px-4 py-2 text-left">Year</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-center">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2">{book.title}</td>
                                <td className="px-4 py-2">{book.author}</td>
                                <td className="px-4 py-2">{book.year}</td>
                                <td className={`px-4 py-2 ${book.available ? "text-green-500" : "text-red-500"}`}>
                                    {book.available ? "Available" : "Lent"}
                                </td>
                                <td className="px-4 py-2 flex flex-col md:flex-row gap-2">
                                    <button className="hover:text-blue-500 hover:cursor-pointer">Update</button>
                                    <button className="hover:text-red-500 hover:cursor-pointer" onClick={() => deleteBook(book.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}