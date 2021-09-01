import logo from './logo.png';
import '../styles/NavBar.css';
import NavItem from './NavItem';
import { Link } from "react-router-dom";
import { useState } from 'react';
import CardIcon from './CardIcon';
import WidgetCart from './WidgetCart';

function NavBar() {
  const menuItems = [
    {
      texto: 'Accesorios',
      ruta: '/category/accesorios'
    },
    {
      texto: 'Ropa',
      ruta: '/category/ropa'
    },
  ];
  const [showWidgetCart, setShowWidgetCart] = useState(false);

  const openWidgetCart = () => {
      setShowWidgetCart(!showWidgetCart);
  }

  return (
    <>
    <nav className="navbar">
        <Link to="/"><img className="navbar__logo" src={logo} alt=""/></Link>
        <ul className="navbar__menu">
          {
            menuItems.map((category, index) => <NavItem key={index} texto={category.texto} url={category.ruta} />)
          }

            <li className="navbar__item"><a className="navbar__enlace" href="#">Sobre Nosotros</a></li>
            <li className="navbar__item"><a className="navbar__enlace" href="#">Contacto</a></li>
            {/* <li className="navbar__item"><Link  className="navbar__enlace" to="/cart"></Link></li> */}
        </ul>

        <CardIcon action={openWidgetCart} />
    </nav>
    <WidgetCart show={showWidgetCart} action={openWidgetCart} />
    </>
);
}

export default NavBar;