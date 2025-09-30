import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardsPrices from "./prices/CardsPrices";

const Prices = () => { 
    return (
        <section className="bg-green-500">
            <SubTitles />
            <Paragraphs />
            <CardsPrices />
        </section>
    )
 }

export default Prices;