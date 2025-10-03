import FormConsult from "./hero/FormConsult"
import Title from "./hero/Title"
import HeroActions from "./hero/HeroActions"
import ModalResp from "./hero/ModalResp"
import { useState } from "react";

const Hero = () => {

    const [inputValue, setInputValue] = useState('');

   const handleSubmit = async (e,inputValue) => {
        e.preventDefault();
        setInputValue(inputValue);
   }

    return(
        <section>
            <div className="flex flex-col items-center bg-[#0E5F76] py-[150px] px-4 text-white">
                <Title />
                <FormConsult handleSubmit={handleSubmit} />
                {/* <ModalResp  inputValue={inputValue} /> */}
                <HeroActions />
            </div>
        </section>
    )
}
export default Hero;
  
