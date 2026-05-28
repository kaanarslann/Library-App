import { createContext, useState } from "react";
import { initialBooks } from "../data/booksData";

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState(initialBooks);

    const addBook = (book) => {
        setBooks((prev) => [
            ...prev,
            {...book, id: Date.now()},
        ]);
    };

    const updateBook = (updatedBook) => {
        setBooks((prev) => prev.map((book) => book.id === updatedBook.id ? updatedBook : book));
    };

    const deleteBook = (id) => {
        setBooks((prev) => prev.filter((book) => book.id !== id));
    };

    return (
        <BookContext.Provider value={{books, addBook, updateBook, deleteBook}}>
            {children}
        </BookContext.Provider>
    );
}