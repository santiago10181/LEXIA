import Cards from "../../resources/Cards";

const CardsWorks = () => {  
    return(
        <div className="flex flex-row items-center justify-center gap-4">
            <Cards subname={`Suba o Describa`} subparagraph={`Cargue sus documentos existentes o describa la necesidad legal que tiene en lenguaje natural.`}  />   
            <Cards subname={`Análisis con IA`} subparagraph={`Nuestra IA procesa la información, identifica riesgos, sugiere cláusulas y genera borradores en segundos.`}  />
            <Cards subname={`Revise y Exporte`} subparagraph={`Colabore con su equipo, apruebe los cambios y exporte los documentos listos para firmar.`}  />
        </div>
    )
}

export default CardsWorks;