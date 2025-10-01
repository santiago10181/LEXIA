import SubTitles from "../resources/SubTitles";
import Associates from "./allies/Associeates";
import brand from "../../assets/images/brand.png";
const Allies = () => {
    return(
        <section className="section">
            <SubTitles subtitle={"Con la Confianza de Firmas Líderes y PYMEs"} />
            <ul className="flex">
                <Associates src={brand} alt="Microsoft Office" title="Microsoft Office" />
                <Associates src={brand} alt="Google Workspace" title="Google Workspace" />
                <Associates src={brand} alt="Google Workspace" title="Google Workspace" />
            </ul>
        </section>
    )
}

export default Allies;
   