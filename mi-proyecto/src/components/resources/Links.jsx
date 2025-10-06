import { NavbarLink } from "flowbite-react";

const Links = ({name, ref}) => {
    return (
        <NavbarLink className="text-[#081E3F] text-xl hover:text-white hover:underline" href={ref} active>{name}</NavbarLink>
    )
};
export default Links;