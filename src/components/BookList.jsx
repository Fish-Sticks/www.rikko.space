import BookCard from "./BookCard";

function BookList({books}){
    return (
    <div className="row my-4">
        {
            books.map(book =>(
                    <BookCard key={book.id} book={book}/>
            ))
        }
    </div>)
}

export default BookList;