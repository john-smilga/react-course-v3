import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
