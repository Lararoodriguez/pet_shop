import NavBar from './NavBar';
import InfoContainer from './InfoContainer'

function Header() {
  return (
    <header  className="app-header">
        <NavBar/>
        <InfoContainer />
    </header>
  );
}

export default Header;