function BookCard({book}){
    const bookInfo = book.volumeInfo;

    try{
        return(
        <div className="col-md-4 mb-4 pb-0 mb-0 pt-4 d-flex flex-column text-center">
            <div className="card h-100">
                <img className="card-img-top w-75 mx-auto" src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title}/>
                <div className="card-body mt-auto">
                    <h5 className="card-title">{bookInfo.authors.join(", ") }</h5>
                    <p className="card-text">{bookInfo.title}</p>
                    <button type="button" onClick={()=>window.open(bookInfo.infoLink)} className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>)
    }catch(error){
        return <div></div>
    }
}

export default BookCard;