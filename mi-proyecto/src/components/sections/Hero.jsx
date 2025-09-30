import SendHero from "./hero/SendHero"
import Title from "./hero/Title"
import InputText from "./hero/InputText"
import HeroActions from "./hero/HeroActions"


const Hero = () => {
    return(
        <section>
            <div className="flex flex-col items-center bg-green-500">
                <Title />
                <InputText />
                <HeroActions />
                <SendHero  />
            </div>
        </section>
    )
}
export default Hero;
  
