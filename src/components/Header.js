import NavBar from './NavBar';
import InfoContainer from './InfoContainer'
import '../styles/Header.css';

function Header() {
  return (
    <header  className="app-header">
        <NavBar/>
        <InfoContainer />
    </header>
  );
}

export default Header;