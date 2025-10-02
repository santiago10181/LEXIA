import ButtonActions from '../resources/ButtonActions';

const ButtonsNav = () => {
    return (
        <div className='flex space-x-4'>
            <ButtonActions name = "Ver Demo" ref="#" 
            styles={`bg-gradient-to-br from-[#547792] to-blue-600 text-white focus:ring-0 focus:outline-none
        active:scale-95 active:shadow-lg transition-transform duration-200 ease-in-out py-5 px-8`}
        
        />
            <ButtonActions name = "Empezar" ref="#"
            styles={`hover:bg-[#ECEFCA] hover:text-[#547792] focus:ring-1  focus:outline-none py-4 px-8`}
            form="outline"
            />
        </div>
    )
}
export default ButtonsNav;