import ButtonActions from "../../resources/ButtonActions";

const HeroActions = () => {
    return(
        <div className="flex gap-4  my-[50px]">
            <ButtonActions name={"ver planes"} href={"#"}
                        styles={`text-lg bg-[#081E3F] 
                            text-white focus:ring-0 focus:outline-none active:scale-95
                            active:shadow-lg transition-transform duration-200 ease-in-out py-6 px-8`}
            form="outline" />
            <ButtonActions name={"Explorar funciones"} href={"#"}
                        styles={` text-lg hover:bg-[#083D56] focus:ring-1  focus:outline-none py-6 px-8`}
            form="outline" />
        </div>
    )
}
export default HeroActions;