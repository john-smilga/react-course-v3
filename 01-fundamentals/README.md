# React Fundamentals

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

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

- zoom 175%

#### Remove Boilerplate

- remove src folder
- create src folder

  - create index.js inside src

- toggle sidebar CMD + B
- shortcuts settings/keyboard shortcuts

#### First Component

```js
function Greeting() {
  return <h2>My First Component</h2>
}

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>
}
```

- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>

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

#### Extensions and settings.json

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)

settings.json

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - react auto import
    - uncheck
    - React Snippets › Settings: Import React On Top

#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement('h2', {}, 'hello world')
}
```

```js
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  )
}

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'hello world')
  )
}
```

#### JSX Rules

- return single element

  - semantics section/article
  - Fragment - let's us group elements without adding extra nodes

```js
return <React.Fragment>...rest of the return</React.Fragment>

// shorthand

return <>...rest of the return</>
```

- camelCase property naming convention

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className='someValue'>hello</div>
```

- close every element

```js
return <img />
// or
return <input />
```

- formatting
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <div>
      <div className='someValue'>
        <h3>hello people</h3>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <img src='' alt='' />
      <input type='text' name='' id='' />
    </div>
  )
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>this is my message</p>
}
```

#### React Developer Tools

- top right corner
- more tools/extensions
- open chrome web store
