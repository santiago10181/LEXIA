const SubTitles = ({subtitle, color, fontSize, br}) => {
    return(
        <h2 className={`${color} ${fontSize} font-serif`}>{subtitle}{br}</h2>
    )
}
export default SubTitles;