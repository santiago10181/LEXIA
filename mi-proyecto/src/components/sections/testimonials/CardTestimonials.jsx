import ImgsCarrusel from "../../resources/ImgsCarusel";
import { Carousel } from "flowbite-react";
import dash1 from "../../../assets/images/dashImg/dash1.1.png";
import dash2 from "../../../assets/images/dashImg/dash1.2.png";
import dash3 from "../../../assets/images/dashImg/dash1.3.png";

const CardTestimonials = () => {  

return (
  <div className="h-[500px]">
    <Carousel>
        <ImgsCarrusel src={dash1} alt="dash1" />
        <ImgsCarrusel src={dash2} alt="dash2" />
        <ImgsCarrusel src={dash3} alt="dash3" />
    </Carousel>
  </div>
);

 }
 export default CardTestimonials;
