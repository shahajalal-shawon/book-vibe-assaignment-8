import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="flex justify-center items-center text-4xl mt-10 mb-10 font-bold">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;