import React from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({title}) => {   // {title}

    return (
      <nav className="NavBar">
          <div className="Categories">
            <h3>Torontel</h3>    
          </div>
                   
          <div className="Categories">
            <Button label='Inicio' />
            <Button label='Vinos Argentinos' />
            <Button label='Vinos Españoles' />
            <Button label='Contacto' />
          </div>
          <CartWidget />
      </nav>
  
    )
}



export default NavBar