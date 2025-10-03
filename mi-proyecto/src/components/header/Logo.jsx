import { NavbarBrand } from "flowbite-react";
import brand from "../../assets/images/brand.png"

const Logo = ({Name}) => {
  return (
    <NavbarBrand href="#">
      <img src={brand} className="mr-3 h-6 sm:h-9" alt="Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold text-[#081E3F]">{Name}</span>
    </NavbarBrand>
  )
};

export default Logo;