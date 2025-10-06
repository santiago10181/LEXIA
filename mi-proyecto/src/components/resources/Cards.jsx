import { Card } from "flowbite-react";

const Cards = ({subname, subparagraph}) => {
    return(
        <Card href="#" className="max-w-sm bg-white ">
            <h5 className="text-2xl font-bold tracking-tight text-navy">
                {subname}
            </h5>
            <p className="font-normal text-midblue">
                {subparagraph}
            </p>
        </Card>
    )
}

export default Cards;