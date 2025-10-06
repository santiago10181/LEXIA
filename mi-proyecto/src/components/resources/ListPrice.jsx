

const CardsPrices = ({description,style}) => {

    return (
      <li className={style}>
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
          <path stroke-linecap="round" d="M5 13l4 4L19 7"></path></svg>
            {description}
      </li>
    )
}
export default CardsPrices;

