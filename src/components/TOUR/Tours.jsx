import { tours } from "../../data"
import { Tour } from "./tour";
import { Title } from "../Title"

export const Tours = () => {
  return (
    <section className="section" id="tours">
      
      <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
       
        {
          tours.map((tour)=>{

            return <Tour key={tour.id} {...tour}/>
            
          })
        }
      </div>
    </section>
  )
}
