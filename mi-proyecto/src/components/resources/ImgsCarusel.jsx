import Subtitle from "../resources/SubTitles"
import Para from "../resources/Pararaphs"
import Check from "../../assets/SVG/Check"
import ListPrice from "../resources/ListPrice"

const ImgsCarrusel = ({src, alt}) => {
    return(
    <div className="flex h-full items-center justify-center bg-lightgray gap-6">
        <img 
          src={src} 
          alt={alt}
          className="max-h-[400px] max-w-full object-contain rounded-xl"
        />
      <article className="flex flex-col h-full p-6 md:p-8">
        <div className="text-start mb-6">
        < Subtitle color={"text-2xl font-bold tracking-tight text-navy"} subtitle={"text-2xl font-bold tracking-tight text-navy"} />
        < Para color={"font-normal text-midblue"} paragraph={"font-normal text-midblue"} />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center ">
        <ul className="space-y-4">
          <ListPrice description={"ESTE ES EL PRIMER DDESC"} style={"flex items-center gap-3"} />
          <ListPrice description={"ESTE ES EL PRIMER DDESC2"} style={"flex items-center gap-3"} />
          <ListPrice description={"ESTE ES EL PRIMER DDESC3"} style={"flex items-center gap-3"} />
          <ListPrice description={"ESTE ES EL PRIMER DDESC5"} style={"flex items-center gap-3"} />
        </ul>
        </div>
      </article>
    </div>
    )
}

export default ImgsCarrusel;