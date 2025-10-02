import { NavbarLink } from "flowbite-react";

const Links = ({name, ref}) => {
    return (
        <NavbarLink className="text-gray-900" href={ref} active>{name}</NavbarLink>
    )
};
export default Links;