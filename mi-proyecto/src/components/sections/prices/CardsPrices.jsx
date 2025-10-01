import Paragraphs from "../../resources/Pararaphs";
import SubTitles from "../../resources/SubTitles";
import ListPrice from "../../resources/ListPrice";
import ButtonActions from "../../resources/ButtonActions";

const CardsPrices = ({product,descP, value, list1, list2, list3, list4, list5,nameButton, href}) => {

    return (
        <article>
            <SubTitles subtitle={product} /> 
            <Paragraphs paragraph={descP} />
            <div>
                <SubTitles subtitle={`$${value}/mes`} />
                <ul>
                  <ListPrice description={list1} />
                  <ListPrice description={list2} />
                  <ListPrice description={list3} />
                  <ListPrice description={list4} />
                  <ListPrice description={list5} />
                </ul>
              <ButtonActions name={nameButton} href={href} /> 
            </div>
        </article>
    )
}

export default CardsPrices;


