import SendHero from "./hero/SendHero"
import Title from "./hero/Title"
import InputText from "./hero/InputText"
import HeroActions from "./hero/HeroActions"
import { useState } from "react"

const Hero = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (eventInput) => {
        setInputValue(eventInput.target.value);
    }

    return(
        <section>
            <div className="flex flex-col items-center bg-green-500">
                <Title />
                <InputText value={inputValue} onChange={handleInputChange} />
                <HeroActions />
                <SendHero  />
            </div>
        </section>
    )
}
export default Hero;
  
