import { Title } from "./Title";
import { services } from "../data";

export const Services = () => {
  return (
    <section className="section services" id="services">
      
      <Title title='OUR' subTitle='services'/>

      <div className="section-center services-center">

        {services.map((service) => {
          const { id, icon, title, text} = service;

          return(
            <article className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                 { text }
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
