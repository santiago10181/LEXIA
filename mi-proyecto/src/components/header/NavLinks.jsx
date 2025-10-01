import Links from "../resources/Links";

const NavLinks = () =>{ 
    return(
        <nav className="nav-menu">
            <Links ref="#soluciones" name="Soluciones" />
            <Links ref="#works" name="Cómo Funciona" />
            <Links ref="#prices" name="Precios" />
            <Links ref="#contact" name="Contacto" />
        </nav>
    )
};
 export default NavLinks;