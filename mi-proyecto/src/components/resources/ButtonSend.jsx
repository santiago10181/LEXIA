const ButtonSend = () => {
    return (
            <button type="submit"
            className="text-white absolute end-2.5 bottom-2.5 
                      bg-[#0E5F76] hover:bg-[#D7DF71] focus:ring-4 focus:outline-none focus:ring-lime-200 
                      font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
    )
}
export default ButtonSend;
{/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 
  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Search</button>
   */}