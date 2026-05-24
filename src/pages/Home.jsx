import { BookContext } from "../context/BookContext"
import { useContext } from "react"

export default function Home() {
    
    const {books} = useContext(BookContext);
    
    return (
        <>
            <section className="overflow-x-auto">
                <table className="mib-w-full table-auto border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Author</th>
                            <th className="px-4 py-2 text-left">Year</th>
                            <th className="px-4 py-2 text-left">Availabile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2">{book.title}</td>
                                <td className="px-4 py-2">{book.author}</td>
                                <td className="px-4 py-2">{book.year}</td>
                                <td className="px-4 py-2">{book.available ? "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}