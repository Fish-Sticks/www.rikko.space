import Search from "./Search";

function NavBar({onSearch}){
    return (
    <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">📖 Bookshelf</a>
          <Search onSearch={onSearch}/>
        </div>
      </nav>)
}

export default NavBar;