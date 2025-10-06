
import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardsWorks from "./how_dows/CardsWorks";
const HowDoes = () => {
    return(
        <section className="bg-lightgray flex-row items-center justify-center gap-4 p-10"> 
            <SubTitles subtitle={"¿Cómo Funciona?"} color={"text-4xl font-bold text-center tracking-tight text-navy p-4"} />
            <Paragraphs paragraph={`Transforme su práctica legal en tres simples pasos.`} color={"font-sans text-center text-xl md:text-2xl text-midblue font-medium tracking-wide mb-15"} />
            <CardsWorks />
        </section>
    )
}

export default HowDoes;