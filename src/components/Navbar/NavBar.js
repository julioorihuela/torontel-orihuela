import './Navbar.css'

const NavBar = () => {
    return (
      <nav className="NavBar">
          <div>
            <p><b>Torontel</b></p>    
          </div>
        <button className="Option">Inicio</button>
        <div>
            <p className="Option">Vinos Argentinos</p>   
        </div>
        <div>
            <p className="Option">Vinos Españoles</p>    
        </div>
        <div>
            <p className="Option">Rones</p>    
        </div>
                   
        <button className="Option">Login</button>
      </nav>
  
    )
  }

  export default NavBar