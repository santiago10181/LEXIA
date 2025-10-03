import ButtonActions from '../resources/ButtonActions';

const ButtonsNav = () => {
    return (
        <div className='flex space-x-4'>
            <ButtonActions name = "Ver Demo" ref="#" 
            styles={`bg-[#081E3F] text-[#547792] focus:ring-0 focus:outline-none
        active:scale-95 active:shadow-lg transition-transform duration-200 ease-in-out`}
        
        />
            <ButtonActions name = "Empezar" ref="#"
            styles={`hover:bg-[#083D56] text-[#081E3F] focus:ring-1  focus:outline-none `}
            form="outline"
            />
        </div>
    )
}
export default ButtonsNav;