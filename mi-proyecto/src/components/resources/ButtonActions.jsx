import { Button } from "flowbite-react";    

const ButtonActions = ({name,ref,styles}) => {

    return (
        <>
            <Button href={ref} className={styles} outline >{name}</Button>
        </>
    )
}
export default ButtonActions;   