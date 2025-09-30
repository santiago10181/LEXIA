import Logo from './header/Logo.jsx';
import NavMenu from './header/NavLinks';
import ButtonActions from './header/ButtonsNav';

const Header = () =>  {
    return (
        <header className="header" id="header">
        <div className="flex flex-row justify-between items-center container nav">
            <Logo />
            <NavMenu />
            <ButtonActions />
        </div>
        </header>
    )
}

export default Header;