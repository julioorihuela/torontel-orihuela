import './Navbar.css'
import Button from '../Button/Button'

const NavBar = ({ title, ...rest }) => {

    return (
      <nav className="NavBar">
          <div className="Categories">
            <h3 >{title}</h3>    
          </div>
                   
          <div className="Categories">
            <Button label='Vinos Argentinos' colorText='black' />
            <Button label='Vinos Españoles' />
            <Button label='Rones' />
          </div>
      </nav>
  
    )
}

export default NavBar