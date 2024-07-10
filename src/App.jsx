import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BookList from './components/BookList'

function App() {
  //https://www.googleapis.com/books/v1/volumes/?q=javascript
  const [books,setBooks] = useState([])
  const [searchTerm,setSearchTerm] = useState("Python")
  const [loading,setLoading] = useState(false)

  function handleSearch(query){
    setSearchTerm(query)
  }

  useEffect(()=>{
    setLoading(true)
    fetchBooks()
    console.log("BOOKS:: ",books);
  },[searchTerm])

  const fetchBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/?q=${searchTerm}&maxResults=40`)
    const data = await response.json();
    setBooks(data.items || [])
    setLoading(false)
  }

  return (
    <>
      <NavBar onSearch={handleSearch}/>
      {loading? <p className='display-3 mt-5'>Loading...</p> : <BookList books={books}/>}
      <Footer/>
    </>
  )
}

export default App
