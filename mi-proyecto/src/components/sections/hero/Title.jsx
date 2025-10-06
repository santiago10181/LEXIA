import SubTitles from "../../resources/SubTitles"
import Paragraphs from "../../resources/Pararaphs"

const Title = () => {
    return(
        <div className=" mx-auto mt-[80px] mb-[30px] max-w-screen-xl text-center lg:px-12">
            <SubTitles 
                subtitle={"IA de Vanguardia en sus Manos." }
                color="text-[#EEEEEE]" 
                fontSize="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl py-[30px]" />
            <Paragraphs paragraph={`Automatice documentos, analice contratos y 
                                    obtenga respuestas jurídicas 24/7 con una 
                                    plataforma diseñada para el mercado legal
                                    colombiano.`} 
                        color="text-lightgray/80 " 
                        font="text-lg font-normal lg:text-2xl sm:px-16 xl:px-48" />
        </div>
)}
export default Title;