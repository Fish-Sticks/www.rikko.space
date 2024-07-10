import { useState } from "react";

function Search({onSearch}){
    const [searchTerm,setSearchTerm] = useState("")

    function onSubmit(e){
        e.preventDefault();
        onSearch(searchTerm);
    }

    return(        
    <form className="d-flex mt-3" role="search" onSubmit={onSubmit}>
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search for books" 
        aria-label="Search"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>)
}

export default Search;