import Logo from './header/Logo.jsx';
import NavLinks from './header/NavLinks';
import ButtonActions from './header/ButtonsNav';
import { Navbar, Button, NavbarCollapse, NavbarToggle } from "flowbite-react";


const Header = () =>  {
return (

         <Navbar fluid rounded className='bg-[#94B4C1]' >
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

