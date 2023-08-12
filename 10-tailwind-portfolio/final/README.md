#### Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

```js
const App = () => {
  return <div>App</div>;
};
export default App;
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx

App.jsx

```js
const App = () => {
  return <h1 className='text-7xl font-bold underline'>Tailwind project</h1>;
};
export default App;
```

#### Assets

- get assets from "project-assets"
- images from Undraw
  [Undraw Docs](https://undraw.co/)

#### Install More Libraries

```sh
npm i nanoid react-icons
```

#### Useful Tailwind Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)

#### Navbar Component

- explore 'links' array in data.jsx
- setup components/navbar
- import links
- setup return and render in App.jsx

```js
import { links } from '../data';
const Navbar = () => {
  return (
    <nav className='bg-emerald-100 '>
      <div className='mx-auto max-w-7xl  px-8 py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Web
          <span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3 '>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
```

#### Hero Component

- setup components/Hero
- setup return
- render in App.jsx

```js
import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className='bg-emerald-100 py-24  '>
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm John</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-end developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </section>
  );
};
export default Hero;
```

#### Repeating Styles

index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-7xl px-8;
  }
}
```

- replace in Hero and Navbar

#### Skills

- explore skills array in data.jsx
- create Skills,SkillsCard and SectionTitle components
- setup return and render in App.jsx

Skills.jsx

```js
import SkillsCard from './SkillsCard';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle text='tech stack ' />

      <div class=' py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
```

SectionTitle.jsx

```js
const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
```

SkillsCard.jsx

```js
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};
export default SkillsCard;
```

#### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```

#### About

- create About component and render in App.jsx

```js
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
```

#### Projects

- explore "projects" array in data.jsx
- create Projects and ProjectsCard components
- setup return and render in App.jsx

Projects.jsx

```js
import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
```

ProjectsCard.jsx

```js
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 '
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
```

#### Extra Challenge

- setup projects in CMS
