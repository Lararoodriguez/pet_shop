import logo from '../img/logo.png';
import './styles/NavBar.css';
import NavItem from './NavItem';
import { Link } from "react-router-dom";
import { useState } from 'react';
import CardIcon from '../CardIcon';
import WidgetCart from '../WidgetCart';


function NavBar() {

  const navItems = [
    {
      text: 'Ropa',
      url: '/category/ropa'
    },
    {
      text: 'Accesorios',
      url: '/category/accesorios'
    },
  ];

  const [showWidgetCart, setShowWidgetCart] = useState(false);

  const openWidgetCart = () => {
      setShowWidgetCart(!showWidgetCart);
  }

  return (
        <>
        <nav className="navbar">
            <Link to="/"><img className="navbar__logo" src={logo} alt="Logotipo"/></Link>
            <ul className="navbar__menu">
              {
                navItems.map((category, index) => <NavItem key={index} text={category.text} url={category.url} />)

              }

                <li className="navbar__item"><Link className="navbar__enlace" to="/about">Sobre Nosotros</Link></li>
                <li className="navbar__item"><Link className="navbar__enlace" to="/contact">Contacto</Link></li>
                
            </ul>

            <CardIcon action={openWidgetCart} />
        </nav>
        <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
  );
}

export default NavBar;