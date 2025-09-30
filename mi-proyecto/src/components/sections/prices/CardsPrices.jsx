import Paragraphs from "../../resources/Pararaphs";
import SubTitles from "../../resources/SubTitles";
import ListPrice from "../../resources/ListPrice";
import ButtonActions from "../../resources/ButtonActions";

const CardsPrices = () => {

    return (
        <article>
            <SubTitles /> 
            <Paragraphs />
            <div>
                <SubTitles />
                <ul>
                  <ListPrice />
                  <ListPrice />
                  <ListPrice />
                  <ListPrice />
                  <ListPrice />
                </ul>
              <ButtonActions /> 
            </div>
        </article>
    )
}

export default CardsPrices;


