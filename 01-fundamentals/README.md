# React Fundamentals

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

- zoom 175%

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

- README
  The markdown file where you can share more info about the project for example build instructions and summary

#### Remove Boilerplate

- remove src folder
- create src folder
  - create index.js inside src

#### First Component

- toggle sidebar CMD + B
- shortcuts settings/keyboard shortcuts

```js
function Greeting() {
  return <h2>My First Component</h2>
}
const Greeting = () => {
  return <h2>My First Component</h2>
}
```

- starts with capital letter
- must return JSX (html)

##### Typical Component

```js
// imports or logic

const Greeting = () => {
  return <h2>My First Component</h2>
}
export default Greeting
```

##### Root Component (only one)

index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
```
