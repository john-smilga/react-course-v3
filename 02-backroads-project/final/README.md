# Backroads App

[Working Application - Deployed](https://backroads-app.netlify.app/)

- backroads-html - working html/css/javascript project (contains assets)
- final(complete source code) - working react application
  - navigate to the folder
  - run 'npm install'
  - once the dependencies are installed run 'npm start'

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Create New React App

- install

```sh
npx create-react-app@latest backroads-app
```

- run dev server

```sh
npm start
```

#### SRC Folder (boilerplate)

- index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

// styles (typically global)
import './index.css'

// convention to name it App and setup in a separate file
import App from './App'
// import report web vitals
import reportWebVitals from './reportWebVitals'

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files

App.js

```js
function App() {
  return <h1>backroads app</h1>
}

export default App
```

- remove
  - remove logo.svg
  - App.css

#### Setup Structure

- public/index.html

  - change title
  - copy/paste font-awesome link (from html project)

- index.css

  - copy/paste css (from html project - css/styles.css)
  - error in line 209, just comment out for now

```css
@media screen and (min-width: 768px) {
  /* .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('../images/main.jpeg') center/cover no-repeat;
  } */
}
```

- src folder
  - copy/paste images folder (from html project)
  - move favicon.ico to public
- App.js
  - refactor to <React.Fragment>
  - copy/paste all the content within body tags, up to <script> (index.html)
  - select all "class" instances and refactor to "className" (CMD + D)
  - fix the comment bug (remove or comment out)
  - don't worry about - Using target="\_blank" without rel="noreferrer" warning,
    will fix it later
  - move README.md from final to current project

#### Setup Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.j
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully move the code from App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code
- again, it's just my preference to split up code in such way.
  You can split it up in any way that makes the most sense to you.

#### Navbar

- first let's fix the image (logo)
  - setup import from images and update source

```js
// import
import logo from '../images/logo.svg'

// JSX
;<img src={logo} className='nav-logo' alt='backroads' />
```

#### Smooth Scroll

- html/css feature

```html
<!-- link -->
<a href="#services"> services </a>
<!-- element -->
<section id="services"></section>
```

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

#### Page Links

- refactor repeating code

```js
<li>
  <a href='#home' className='nav-link'>
    home
  </a>
</li>
```

- figure out which data is repeating hint (href, text )
- in src create data.js and setup a structure
  - (hint - [{property:value},{property:value}])
- export/import iterate over the list,return elements and inject data

```js
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]
```

```js
import { pageLinks } from '../data'

{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className='nav-link'>
          {link.text}
        </a>
      </li>
    )
  })
}
```

#### Nav Icons (social-links)

- repeat the same steps (as with page links)
- add rel='noreferrer'

```js
{
  socialLinks.map((link) => {
    const { id, href, icon } = link
    return (
      <li key={id}>
        <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
          <i className={icon}></i>
        </a>
      </li>
    )
  })
}
```

#### Hero

- change title or text (optional)
- fix the image (path in css)

#### About

- fix the image (hint - just like with logo in the navbar)

#### Section Title

- in components create Title.js
- get the structure from one of the sections
- setup two props
- replace in About, Services, Tours

```js
const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title
```

About.js

```js
// import
import Title from './Title'

// display
;<Title title='about' subTitle='us' />
```

#### Services

- refactor repeating code (hint - just like with page and social links)
  - setup data, export/import, iterate

data.js

```js
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  // rest of the objects
]
```

Services.js

```js
import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
```

#### Tours

- refactor repeating code

#### Footer

- refactor repeating code
- re-use page and social links
- in the <span id="date">provide current year (hint - {})

#### Alternative Approach (optional)

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to be to manage
  - my personal preference, if possible just use data

#### Challenge (optional)

- create more components (essentially, split up the code more)
- find all map methods and move elements to separate components
- By the end of the video you should have four additional components
  - Tour.js
  - Service.js
  - SocialLink.js
  - PageLink.js

#### Continuous Deployment

- fix warnings (About Section)

- netlify account
- github account
- basic git commands :

  - remove existing git repo
    - Mac : rm -rf .git
    - Windows : rmdir -Force -Recurse .git
    - Windows : rd /s /q .git
      Windows commands were shared by students and I have not personally tested them.
  - setup new repo
    - git init
      create an empty git repository
    - git add
      adds new or changed files in your working directory
      to the Git staging area
    - git add .
      adds entire project
      apart from files/directories specified in .gitignore
    - git commit -m "first commit"
      A shortcut command that immediately creates a commit
      with a passed commit message.
    - push to github
      git remote add origin git@github.com:your-profile/repo-name.git
      git branch -M main
      git push -u origin main

#### Benefits

- don't need to keep project locally
- automatic builds

#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
