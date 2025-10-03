const Paragraphs = ({paragraph, color, font}) => {  
    return(
        <>
            <p className={`${color} ${font} `}>
                {paragraph}
            </p>
        </>
    )
}
export default Paragraphs;
