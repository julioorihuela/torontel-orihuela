import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ title, ...rest }) => {

    return (
      <nav className="NavBar">
          <div className="Categories">
            <h3>{title}</h3>    
          </div>
                   
          <div className="Categories">
            <Button label='Vinos Argentinos' />
            <Button label='Vinos Españoles' />
            <Button label='Rones' />
          </div>
          <CartWidget />
      </nav>
  
    )
}



export default NavBar