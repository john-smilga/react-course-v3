import { Title } from "./Title";
import { services } from "../data";
import { Service } from "./Service";

export const Services = () => {
  return (
    <section className="section services" id="services">
      
      <Title title='OUR' subTitle='services'/>

      <div className="section-center services-center">

        {services.map((service) => {

          return <Service key={service.id} {...service}/>
          
        })}
      </div>
    </section>
  )
}
