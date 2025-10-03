import { NavbarLink } from "flowbite-react";

const Links = ({name, ref}) => {
    return (
        <NavbarLink className="text-[#081E3F] text-lg" href={ref} active>{name}</NavbarLink>
    )
};
export default Links;