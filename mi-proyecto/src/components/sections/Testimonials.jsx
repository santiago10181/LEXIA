import Paragraphs from "../resources/Pararaphs";
import SubTitles from "../resources/SubTitles";
import CardTestimonials from "./testimonials/CardTestimonials";

const Testimonials = () => {
    return(
        <section className="bg-lightgray py-10">
            <SubTitles subtitle={"Testimonios"} color={"text-4xl font-bold text-center tracking-tight text-navy p-4"} />
            <Paragraphs paragraph={`Lo que nuestros clientes dicen sobre nosotros.`}
            color={"font-sans text-center text-xl md:text-2xl text-midblue font-medium tracking-wide mb-10"} />
            <CardTestimonials />
        </section>
    )
}

export default Testimonials;
  