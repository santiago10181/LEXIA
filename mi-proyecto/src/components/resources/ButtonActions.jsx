import { Button } from "flowbite-react";    

const ButtonActions = ({name,ref,styles}) => {

    return (
        <>
            <Button href={ref} className={styles} outline pill>{name}</Button>
        </>
    )
}
export default ButtonActions;   