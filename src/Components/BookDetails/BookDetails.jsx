import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book);
    return (
        <div>
            <h1>book detalis: {book.author}</h1>
        </div>
    );
};

export default BookDetails;