
import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardsWorks from "./how_dows/CardsWorks";
const HowDoes = () => {
    return(
        <section className="bg-green-500"> 
            <SubTitles subtitle={"¿Cómo Funciona?"} />
            <Paragraphs paragraph={`Transforme su práctica legal en tres simples pasos.`} />
            <CardsWorks />
        </section>
    )
}

export default HowDoes;