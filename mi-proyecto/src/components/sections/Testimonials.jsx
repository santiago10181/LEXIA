import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardTestimonials from "./testimonials/CardTestimonials";

const Testimonials = () => {
    return(
        <section>
            <SubTitles subtitle={"Testimonios"} />
            <Paragraphs paragraph={`Lo que nuestros clientes dicen sobre nosotros.`} />
            <CardTestimonials />
        </section>
    )
}

export default Testimonials;
  