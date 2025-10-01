import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardsPrices from "./prices/CardsPrices";

const Prices = () => { 
    return (
        <section className="bg-green-500">
            <SubTitles subtitle={"Planes y Precios"} />
            <Paragraphs paragraph={`Elija el plan que mejor se adapte a sus necesidades y comience a disfrutar de los beneficios de LegalIA hoy mismo.`} />
            <CardsPrices product={`Profesional`} 
                            descP={`Ideal para PYMEs y pequeñas firmas.`} 
                            value={`99.00`} 
                            list1={`Acceso a Funcionalidad 1`} 
                            list2={`Integracion con Herramienta 2`} 
                            list3={`Soporte Prioritario`} 
                            list4={`Actualizaciones Mensuales`} 
                            list5={`Capacitación Incluida`} 
                            nameButton={`elegir plan`}
                            href={`#`} />
        </section>
    )
 }

export default Prices;