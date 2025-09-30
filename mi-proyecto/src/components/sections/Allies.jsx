import SubTitles from "../resources/SubTitles";
import Associates from "./allies/Associeates";
const Allies = () => {
    return(
        <section className="section">
            <SubTitles />
            <ul className="flex">
                <Associates />
                <Associates />
                <Associates />
            </ul>
        </section>
    )
}

export default Allies;
   