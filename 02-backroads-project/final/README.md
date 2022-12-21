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
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles (typically global)
import './index.css';

// convention to name it App and setup in a separate file
import App from './App';
// import report web vitals
import reportWebVitals from './reportWebVitals';

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files

App.js

```js
function App() {
  return <h1>backroads app</h1>;
}

export default App;
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
{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className='nav-link'>
          {link.text}
        </a>
      </li>
    );
  });
}
```

#### Nav Icons (social-links)

- repeat the same steps (as with page links)
- add rel='noreferrer'

```js
{
  socialLinks.map((link) => {
    const { id, href, icon } = link;
    return (
      <li key={id}>
        <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
          <i className={icon}></i>
        </a>
      </li>
    );
  });
}
```

#### Hero

- change title or text (optional)
- fix the image (path in css)

#### About

- fix the image (hint - just like with logo in the navbar)

#### Services

- refactor repeating code (hint - just like with page and social links)
  - setup data, export/import, iterate

#### Tours

- refactor repeating code

#### Footer

- refactor repeating code
- re-use page and social links
- in the <span id="date">provide current year (hint - {})

#### Section Title

- in components create Title.js
- get the structure from one of the sections
- setup two props
- replace in About, Services, Tours

#### Alternative Approach

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to manage
  - my personal preference, if possible just use data
