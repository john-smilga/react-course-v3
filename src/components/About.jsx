import aboutImg from '../images/about.jpeg'

export const About = () => {
  return (
    <section className="section" id="about">
    <div className="section-title">
      <h2>about <span>us</span></h2>
    </div>

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={ aboutImg }
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <a href="#" className="btn">read more</a>
      </article>
    </div>
  </section>
  )
}
