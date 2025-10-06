import Logo from './header/Logo.jsx';
import NavLinks from './header/NavLinks';
import ButtonActions from './header/ButtonsNav';
import { Navbar, Button, NavbarCollapse, NavbarToggle } from "flowbite-react";


const Header = () =>  {
return (

    <Navbar fluid rounded className='bg-[#134B70] fixed z-1 w-full border-b-1 border-[#508C9B]' >
        <Logo  Name="LEXIA"  />
        <NavbarToggle   />
        <NavbarCollapse>    
            <NavLinks />
        </NavbarCollapse>
        <NavbarCollapse>   
            <ButtonActions />
        </NavbarCollapse>   
    </Navbar>   
    )
}

export default Header;

