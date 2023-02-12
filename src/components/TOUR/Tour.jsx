
export const Tour = ({ 
    image,
    date,
    title,
    info, 
    location, 
    duration, 
    cost}) => {
  return (
    <article className="tour-card">
                <div className="tour-img-container">
                  
                  <img 
                    src={image} 
                    className="tour-img"  
                    alt="" 
                  />
                  
                  <p className="tour-date">
                    {date}
                  </p>
                </div>
                
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span> 
                    </p>
                    <p>{location}</p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
  )
}
