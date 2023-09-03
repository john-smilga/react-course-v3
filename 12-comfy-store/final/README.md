## Useful Project Resources

- [Complete Project](https://react-vite-comfy-store-v2.netlify.app/)
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)

## IMPORTANT !!!

Try to work on one challenge at a time and observe my solution.
This approach will make it easier later to identify any potential bugs.

## Challenge (1) - Setup

- create vite project with tailwind

## Solution (1) - Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest comfy-store -- --template react
cd comfy-store
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

tailwind.config.cjs

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
- remove StrictMode

  App.jsx

```js
const App = () => {
  return <h1 className='text-7xl font-bold underline'>Tailwind project</h1>;
};
export default App;
```

## Assets

- get project assets

## Challenge (2) - Setup DaisyUI

- [DaisyUI](https://daisyui.com/)

- add and configure daisyui to our project
- add TailwindCSS Typography plugin

## Solution (2) - Setup DaisyUI

[DaisyUI](https://daisyui.com/)

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.js

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Install All Libraries

```sh
npm i axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3

```

## Challenge (3) - Create All Pages

- create pages directory
- create all pages and export from index.js
- About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct
- import in app.jsx

## Solution (3) - Create All Pages

pages/About.jsx

```js
const About = () => {
  return <h1 className='text-4xl'>About</h1>;
};
export default About;
```

pages/index.js

```js
export { default as HomeLayout } from './HomeLayout';
export { default as Landing } from './Landing';
export { default as SingleProduct } from './SingleProduct';
export { default as Products } from './Products';
export { default as Cart } from './Cart';
export { default as Error } from './Error';
export { default as About } from './About';
export { default as Login } from './Login';
export { default as Register } from './Register';
export { default as Checkout } from './Checkout';
export { default as Orders } from './Orders';
```

App.jsx

```js
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';
```

## Challenge (4) - React Router

- configure react router
- setup initial route structure
  hint : look for nested UI (basically navbar)

### App.jsx

1. Import Dependencies:

   - Import necessary modules from the 'react-router-dom' library.

2. Create Router Configuration:

   - Use the `createBrowserRouter` function to set up a router configuration.
   - Define an array of route objects, each representing a different route in your application.
   - Configure routes for different paths, including components like `HomeLayout`, `Landing`, `Products`, etc.

3. Create Router Instance:

   - Create a router instance using the `createBrowserRouter` function and pass in the defined route configuration.

4. Define App Component:

   - Create a functional component named `App`.
   - Return a `RouterProvider` component and pass in the created router instance as a prop.

5. Export App Component:
   - Export the `App` component as the default export of the module.

## Solution (4) - React Router

App.jsx

```js
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

HomeLayout.jsx

```js
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
```

## Challenge (5) - Error Page

- complete error page
- create two returns
- first for 404 errors
- second for all other errors
- log the error
- add option to navigate home

### Error.jsx

1. Import Dependencies:

   - Import the necessary modules `useRouteError` and `Link` from the 'react-router-dom' library.

2. Create Error Component:

   - Define a functional component named `Error`.
   - Inside the component, use the `useRouteError` hook to get information about the route error.
   - Check the status of the error using `error.status`.

3. Conditional Rendering for 404 Error:

   - If the error status is 404, render a `main` element with a grid layout and centered content.
   - Display a large "404" text, a title "Page not found," and a description.
   - Include a link back to the home page using the `Link` component.

4. Conditional Rendering for Other Errors:

   - If the error status is not 404, render a `main` element with a grid layout and centered content.
   - Display a text message indicating that there was an error.

5. Export Error Component:
   - Export the `Error` component as the default export of the module.

## Solution (5) - Error Page

Error.jsx

```js
import { useRouteError, Link } from 'react-router-dom';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404)
    return (
      <main className='grid min-h-[100vh] place-items-center px-8 '>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7 '>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 '>
            <Link to='/' className='btn btn-secondary'>
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );

  return (
    <main className='grid min-h-[100vh] place-items-center px-8 '>
      <h4 className='text-center font-bold text-4xl'>there was an error... </h4>
    </main>
  );
};
export default Error;
```

## Challenge (6) - Input Field Component

- create components folder with index.js
- in daisyui
- find Text input component
- more specifically "With form-control and labels"
- set it as component (in my case FormInput.jsx)
- decide on props
- export from index.js
- test in login

### FormInput.jsx

1. Create FormInput Component:

   - Define a functional component named `FormInput`.
   - The component accepts the following props: `label`, `name`, `type`, and `defaultValue`.

2. FormInput Structure:

   - Inside the component, return a `div` element with the class `form-control`, which provides styling for form inputs.
   - Within this `div`, create a `label` element with the class `label`.
   - Inside the `label`, use the `label-text` class to display the capitalized label text provided through the props.

3. Input Element:

   - After the `label`, create an `input` element.
   - Set the `type` attribute of the `input` element to the value provided through the `type` prop.
   - Set the `name` attribute of the `input` element to the value provided through the `name` prop.
   - Use the `defaultValue` prop to set the initial value of the input element.
   - Apply the `input` and `input-bordered` classes to the `input` element for styling.

4. Export FormInput Component:
   - Export the `FormInput` component as the default export of the module.

## Solution (6) - Input Field Component

components/index.js

```js
export { default as FormInput } from './FormInput';
```

FormInput.jsx

```js
const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className='input input-bordered '
      />
    </div>
  );
};
export default FormInput;
```

## Challenge (7) - Login Page Structure

- setup structure for login page (use complete project as reference)
- check for loading state and disable submit button
- setup submit button in a separate component
- add loading spinner

### SubmitBtn.jsx

- Import Dependencies:

  - Import `useNavigation` from `'react-router-dom'`.

- Create the `SubmitBtn` Component:

  - Define a functional component named `SubmitBtn`.
  - Accept a prop `text`.

  - Inside the component, use the `useNavigation()` hook to access navigation state.
  - Determine whether the form is submitting by checking if `navigation.state` is equal to `'submitting'`.

  - Return a `button` element with the following attributes:

    - Type set to `'submit'`.
    - Class set to `'btn btn-primary btn-block'`.
    - Disabled attribute set to the value of `isSubmitting`.

    - Inside the `button` element, use a conditional rendering:
      - If `isSubmitting` is true:
        - Render a `span` element with class `'loading loading-spinner'`.
        - Render the text `'sending...'`.
      - If `isSubmitting` is false:
        - Render the `text` prop if provided, otherwise render `'submit'`.

### Login.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Login` Component:

  - Define a functional component named `Login`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'post'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Login'`.

      - Use the `FormInput` component twice:

        - First, for an email input with type `'email'`, label `'email'`, name `'identifier'`, and defaultValue `'test@test.com'`.
        - Second, for a password input with type `'password'`, label `'password'`, name `'password'`, and defaultValue `'secret'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'login'`.

      - Create a `button` element with the following attributes:

        - Type set to `'button'`.
        - Class set to `'btn btn-secondary btn-block'`.
        - Text content set to `'guest user'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Not a member yet?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/register'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'register'`.

## Solution (7) - Login Page Structure

Login.jsx

```js
import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
```

SubmitBtn.jsx

```js
import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
```

## Challenge (8) - Register Page Structure

- setup structure for register page (use complete project as reference)

### Register.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Register` Component:

  - Define a functional component named `Register`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'POST'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Register'`.

      - Use the `FormInput` component three times:

        - First, for a text input with type `'text'`, label `'username'`, and name `'username'`.
        - Second, for an email input with type `'email'`, label `'email'`, and name `'email'`.
        - Third, for a password input with type `'password'`, label `'password'`, and name `'password'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'register'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Already a member?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/login'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'login'`.

## Solution (8) - Register Page Structure

```js
import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>

        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
```

## Challenge (9) - Custom Class

- create custom class
- align content
- add to HomeLayout Outlet component

## Solution (9) - Custom Class

index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-6xl px-8;
  }
}
```

```js
<section className='align-element py-20'>
  <Outlet />
</section>
```

## Challenge (10) - Header Component

- setup and render header component in HomeLayout
- add two links - Login and Register

### Header.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Create the `Header` Component:

  - Define a functional component named `Header`.

  - Return a `header` element with classes `'bg-neutral py-2 text-neutral-content'`.

    - Inside the `header` element, create a `div` element with classes `'align-element flex justify-center sm:justify-end'`.

      - Inside the `div` element, create another `div` element with classes `'flex gap-x-6 justify-center items-center'`.

        - Use the `Link` component twice:

          - First, create a `Link` to `'/login'` with the following attributes:

            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Sign in / Guest'`.

          - Second, create a `Link` to `'/register'` with the following attributes:
            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Create an Account'`.

## Solution (10) - Header Component

```js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' bg-neutral py-2 text-neutral-content '>
      <div className='align-element flex justify-center sm:justify-end '>
        {/* USER */}
        {/* LINKS */}
        <div className='flex gap-x-6 justify-center items-center'>
          <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
          <Link to='/register' className='link link-hover text-xs sm:text-sm'>
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
```

## Challenge (11) - Navbar Structure

- create components/Navbar.jsx
- setup initial structure
- use Daisy navbar component
- "# responsive (dropdown menu on small screen, center menu on large screen)"
- import icons from react-icons
- render in HomeLayout.jsx

### Navbar.jsx

- Import Dependencies:

  - Import icons `BsCart3`, `BsMoonFill`, `BsSunFill`, and `FaBarsStaggered` from their respective packages.
  - Import `NavLink` from `'react-router-dom'`.

- Create the `Navbar` Component:

  - Define a functional component named `Navbar`.

  - Return a `nav` element with class `'bg-base-200'`.

    - Inside the `nav` element, create a `div` element with class `'navbar align-element '`.

      - Inside the first `div` element, create another `div` element with class `'navbar-start'`.

        - Create a `NavLink` to `'/'` with the following attributes:

          - Class set to `'hidden lg:flex btn btn-primary text-3xl items-center '`.

        - Create a `div` element with class `'dropdown'`.

          - Create a `label` element with `tabIndex={0}` and class `'btn btn-ghost lg:hidden'`.

          - Create a `ul` element with `tabIndex={0}` and class `'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'`.

      - Inside the second `div` element, create a `div` element with class `'navbar-center hidden lg:flex'`.

        - Create a `ul` element with class `'menu menu-horizontal '`.

      - Inside the third `div` element, create another `div` element with class `'navbar-end'`.

        - Create a `NavLink` to `'cart'` with the following attributes:

          - Class set to `'btn btn-ghost btn-circle btn-md ml-4'`.

          - Inside the `NavLink`, create a `div` element with class `'indicator'`.

            - Add the `BsCart3` icon component with class `'h-6 w-6'`.

            - Create a `span` element with classes `'badge badge-sm badge-primary indicator-item'` and text content `'8'`.

## Solution (11) - Navbar Structure

```js
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element '>
        <div className='navbar-start'>
          {/* Title */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center '
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              nav links
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>nav links</ul>
        </div>
        <div className='navbar-end'>
          {/* THEME ICONS */}
          {/* CART LINK*/}
          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
```

## Challenge (12) - NavLinks

- create NavLinks component
- setup an array of links
- iterate over and setup return

### Navbar.jsx

- Import Dependencies:

  - Import `NavLink` from `'react-router-dom'`.

- Create the NavLinks Component:

  - Define a functional component named `NavLinks`.

  - Return a fragment (`<>...</>`) to contain the list of navigation links.

    - Use the `.map()` function to iterate over the `links` array.

      - For each `link` object, extract the `id`, `url`, and `text`.

      - Create an `li` element with a `key` attribute set to `id`.

        - Inside the `li` element, create a `NavLink` with the following attributes:

          - Class set to `'capitalize'`.

          - `to` attribute set to the `url`.

          - Text content set to the `text`.

## Solution (12) - NavLinks

NavLinks.jsx

```js
const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
```

## Challenge (13) - Toggle Component

- add daisyui swap component

## Solution (13) - Toggle Component

```js
import { useState } from 'react';

const [theme, setTheme] = useState(false);

const handleTheme = () => {
  setTheme(!theme);
};
<div className='navbar-end'>
  <label className='swap swap-rotate '>
    {/* this hidden checkbox controls the state */}
    <input type='checkbox' onChange={handleTheme} />

    {/* sun icon */}
    <BsSunFill className='swap-on h-4 w-4' />

    {/* moon icon */}
    <BsMoonFill className='swap-off h-4 w-4' />
  </label>
</div>;
```

## Challenge (14) - Set Themes

- add few themes from daisyui
- test in index.html

## Solution (14) - Set Themes

tailwind.config.cjs

```js
{
...
  daisyui: {
    themes: ['winter', 'dracula'],
  },
}
```

```html
<html lang="en" data-theme="winter"></html>
```

## Challenge (15) - Change Theme

- change theme with toggle component

### Navbar.jsx

- Import Dependencies:

  - Import `useEffect` and `useState` from `'react'`.

- Theme Configuration:

  - Define a `themes` object with theme names as keys.

- Local Storage Theme Retrieval:

  - Create a function named `getThemeFromLocalStorage`.
    - Return the value of the `'theme'` key from `localStorage` or the default theme `'winter'`.

- Logic:

  - Create a state variable `theme` using the `useState` hook and initialize it with the result of `getThemeFromLocalStorage()`.
  - Define a function `handleTheme` that toggles between the `'winter'` and `'dracula'` themes based on the current theme.
  - Use the `useEffect` hook to apply the selected theme to the `document.documentElement` and store the theme value in `localStorage`.
  - ... (rest of the component implementation)

## Solution (15) - Change Theme

```js
import { useEffect, useState } from 'react';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  ...
};
```

## Challenge (16) - About Page

- setup about page

### About.jsx

- About Component:
  - Define the `About` component.
    - Return a fragment containing the following elements:
      - A `div` with classes `flex`, `flex-wrap`, `gap-2`, `sm:gap-x-6`, `items-center`, and `justify-center`.
        - Inside the `div`, an `h1` with classes `text-4xl`, `font-bold`, `leading-none`, and `tracking-tight`, with the text "We love".
        - Inside the `div`, a `div` with classes `stats`, `bg-primary`, and `shadow`.
          - Inside the nested `div`, another `div` with class `stat`.
            - Inside this `div`, a `div` with classes `stat-title`, `text-primary-content`, `text-4xl`, `font-bold`, and `tracking-widest`, containing the text "comfy".
      - A `p` element with classes `mt-6`, `text-lg`, `leading-8`, `max-w-2xl`, and `mx-auto`, containing sample Lorem ipsum text.

## Solution (16) - About Page

```js
const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
        odit, officiis eos mollitia alias, doloremque, aspernatur ratione
        asperiores voluptas labore minus dolores reprehenderit corporis quos.
        Assumenda molestias harum dignissimos?
      </p>
    </>
  );
};
export default About;
```

## Challenge (17) - Hero Component

- setup hero component in landing page

### Hero.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Hero Component:
  - Define the `Hero` component.
    - Create an array `carouselImages` containing imported image paths.
    - Return a `div` with classes `grid`, `grid-cols-1`, `lg:grid-cols-2`, `gap-24`, and `items-center`.
      - Inside this `div`, another `div`.
        - Inside this `div`, an `h1` with classes `max-w-2xl`, `text-4xl`, `font-bold`, and `tracking-tight`, containing the text "We’re changing the way people shop."
        - Next, a `p` element with classes `mt-8`, `max-w-xl`, `text-lg`, and `leading-8`, containing sample Lorem ipsum text.
        - Following that, a `div` with class `mt-10`.
          - Inside the `div`, a `Link` component with props `to='products'` and classes `btn` and `btn-primary`, containing the text "Our Products".
      - Another `div` with classes `hidden`, `h-[28rem]`, `lg:carousel`, `carousel-center`, `p-4`, `space-x-4`, `bg-neutral`, and `rounded-box`.
        - Inside this `div`, a JavaScript map function iterating over `carouselImages`.
          - For each image, a `div` with class `carousel-item`.
            - Inside the `div`, an `img` element with attributes `src` set to the image path and classes `rounded-box`, `h-full`, `w-80`, and `object-cover`.

## Challenge (17) - Hero Component

Hero.jsx

```js
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80  object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
```

## Challenge (18) - Axios Custom Instance

- explore api
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- create utils/index.js
- setup custom axios instance
- figure out the base url
- setup thunder client (optional)

## Challenge (18) - Axios Custom Instance

```js
import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
```

## Challenge (19) - Landing Loader

- setup ErrorElement
- add to Loading Page
- setup a loader
- fetch only featured products
- return products

### ErrorElement.jsx

1. Create ErrorElement Component:

   - Define a functional component named `ErrorElement`.

2. Import Dependencies:

   - Import the `useRouteError` hook from `'react-router-dom'`.

3. Get Route Error:

   - Inside the component, use the `useRouteError` hook to retrieve the error information from the current route.

4. Display Error Message:

   - Return an `h4` element with the classes `font-bold` and `text-4xl`.
   - Set the content of the `h4` element to "there was an error..."

5. Export ErrorElement Component:
   - Export the `ErrorElement` component as the default export of the module.

## Solution (19) - Landing Loader

ErrorElement.jsx

```js
import { useRouteError } from 'react-router-dom';
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h4 className='font-bold text-4xl'>there was an error... </h4>;
};
export default ErrorElement;
```

App.jsx

```js
import { ErrorElement } from './components';
// loaders
import { loader as landingLoader } from './pages/Landing';
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
    ],
  },
]);
```

Landing.js

```js
import { Hero } from '../components';

import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
```

## Challenge (20) - Featured Products

- create FeaturedProducts, SectionTitle and ProductsGrid components
- render SectionTitle and ProductsGrid in FeaturedProducts
- setup SectionTitle
- in ProductsGrid access and render products from loader

### SectionTitle.jsx

1. Create SectionTitle Component:

   - Define a functional component named `SectionTitle`.

2. Component Props:

   - The component should accept a prop named `text`.

3. Component Structure:

   - Return a `div` element with the classes `border-b border-base-300 pb-5`.
   - Inside the `div`, place an `h2` element with the classes `text-3xl`, `font-medium`, `tracking-wider`, and `capitalize`.
   - Set the content of the `h2` element to the value of the `text` prop.

4. Export SectionTitle Component:
   - Export the `SectionTitle` component as the default export of the module.

### FeaturedProducts.jsx

1. Import Dependencies:

   - Import `ProductsGrid` from `'./ProductsGrid'`.
   - Import `SectionTitle` from `'./SectionTitle'`.

2. Create FeaturedProducts Component:

   - Define a functional component named `FeaturedProducts`.

3. Component Structure:

   - Return a `div` element with the class `pt-24`.
   - Inside the `div`, include a `SectionTitle` component with the prop `text` set to `'featured products'`.
   - Include a `ProductsGrid` component.

4. Export FeaturedProducts Component:
   - Export the `FeaturedProducts` component as the default export of the module.

### ProductsGrid.jsx

1. Import Dependencies:

   - Import `Link` and `useLoaderData` from `'react-router-dom'`.

2. Create ProductsGrid Component:

   - Define a functional component named `ProductsGrid`.

3. Component Structure:

   - Inside the component, destructure the `products` data using `useLoaderData`.
   - Return a `div` element with the classes `pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3`.
   - Use the `.map()` function to iterate through each `product` in the `products` array.

4. Product Card:

   - For each `product`, destructure the attributes such as `title`, `price`, and `image`.
   - Create a `Link` component that has the following:
     - `key` attribute set to `product.id`.
     - `to` attribute set to `/products/${product.id}`.
     - `className` attribute with classes for styling.
   - Inside the `Link`, create a `figure` element with the class `px-4 pt-4` to hold the product image.
   - Within the `figure`, include an `img` element with the `src` attribute set to `image`, `alt` attribute set to `title`, and classes for styling.
   - Below the `figure`, create a `div` element with the class `card-body items-center text-center`.
   - Inside the `div`, display the `title` using a `h2` element with classes for styling.
   - Display the `price` using a `span` element with the class `text-secondary`.

5. Export ProductsGrid Component:
   - Export the `ProductsGrid` component as the default export of the module.

## Solution (20) - Featured Products

SectionTitle.jsx

```js
const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-base-300 pb-5'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
```

FeaturedProducts.jsx

```js
import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
const FeaturedProducts = () => {
  return (
    <div className='pt-24 '>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
```

ProductsGrid.jsx

```js
import { Link, useLoaderData } from 'react-router-dom';
const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = price;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
```

## Challenge (21) - Format Price

- payment providers need in smallest unit
  - in this case cents
- in utils setup a function to format price
- utilize in ProductsGrid

## Solution (21) - Format Price

- utils/index.js

```js
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
```

## Challenge (22) - Single Product

- complete in multiple steps
- fetch and render single product
- don't forget about the colors and amount options
- extra credit - set amount options dynamically

### SingleProduct.jsx

1. Import Dependencies:

   - Import `useLoaderData` from `'react-router-dom'`.
   - Import `formatPrice`, `customFetch`, and `useState` from `'../utils'`.
   - Import `Link` from `'react-router-dom'`.

2. Define Loader Function:

   - Define a loader function that fetches product data based on the `params.id`.
   - Use `customFetch` to fetch the product data from `/products/${params.id}`.
   - Return an object containing the fetched product data.

3. Create SingleProduct Component:

   - Define a functional component named `SingleProduct`.

4. Component Structure:

   - Inside the component, destructure the `product` data using `useLoaderData`.
   - Destructure attributes like `image`, `title`, `price`, `description`, `colors`, and `company`.
   - Create a `dollarsAmount` variable by formatting the `price` using `formatPrice`.
   - Use `useState` to manage the `productColor` and `amount` state.

5. Display Product Information:

   - Return a `section` element to encapsulate the component content.
   - Display breadcrumb navigation using `Link` components for Home and Products pages.

6. Product Display:

   - Create a `div` with classes for styling and a grid layout.
   - Display the product image using an `img` element with classes for styling.

7. Product Info:

   - Within a `div`, display the product title, company, and `dollarsAmount`.

8. Description:

   - Display the product description using a `p` element.

9. Colors:

   - Display available product colors using a `div` with classes for styling.
   - Map through the `colors` array and create a `button` for each color.
   - Add appropriate classes and styles for the color button based on the selected `productColor`.

10. Amount:

    - Display a dropdown for selecting the product amount using a `div`.
    - Use a `select` element with options for different amounts.
    - Set the value of the `select` to the `amount` state and handle changes with `handleAmount` function.

11. Cart Button:

    - Display an "Add to bag" button using a `button` element with appropriate classes and an `onClick` event handler.

12. Export SingleProduct Component:
    - Export the `SingleProduct` component as the default export of the module.

## Solution (22) - Single Product

- import and setup loader in the App.jsx

```js
import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full  '
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>

          <p className='mt-3 text-xl'>{dollarsAmount}</p>

          <p className='mt-6 leading-8'>{description}</p>

          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          {/* CART BUTTON */}
          <div className='mt-10 '>
            <button
              className='btn btn-secondary btn-md'
              onClick={() => console.log('add to bag')}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
```

<!-- EXTRA CREDIT -->

- rename to index.jsx

index.jsx

```js
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
```

Array.from({ length: number }, (_, index) => { ... }): This part uses the Array.from method to create an array of a specific length, determined by the number parameter. The second argument of the Array.from method is a callback function that will be invoked for each element in the array. The underscore (_) is a placeholder for the current element (which we don't need in this case), and index is the index of the current element.

const amount = index + 1;: Inside the callback function, this line calculates the amount value based on the index. Since the index starts from 0 but you want amount to start from 1, you add 1 to the index.

## Challenge (23) - Products Page (Setup)

- create following components and render in products page
  - Filters
  - ProductsContainer
  - PaginationContainer
- in products page loader fetch all products

### Products.jsx

1. Import Dependencies:

   - Import `Filters`, `PaginationContainer`, and `ProductsContainer` from `'../components'`.
   - Import `customFetch` from `'../utils'`.

2. Define URL and Loader Function:

   - Define a constant `url` containing the URL path to fetch products from.
   - Define a loader function that fetches product data from the defined URL.
   - Use `customFetch` to fetch the product data from the `url`.
   - Extract products and meta information from the response and return them.

3. Create Products Component:

   - Define a functional component named `Products`.

4. Component Structure:

   - Return a `Fragment` element (`<>...</>`) to wrap the component content.

5. Filters Component:

   - Include the `Filters` component to allow users to apply filters to the product list.

6. ProductsContainer Component:

   - Include the `ProductsContainer` component to display the list of products.

7. PaginationContainer Component:

   - Include the `PaginationContainer` component to manage product list pagination.

8. Export Products Component:
   - Export the `Products` component as the default export of the module.

## Solution (23) - Products Page (Setup)

- import and setup loader in app.jsx

Products.jsx

```js
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';
export const loader = async ({ request }) => {
  const response = await customFetch(url);

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
```

## Challenge (24) - Products Container

- create ProductsList and render products in one column
- setup header (with total jobs and toggle buttons)
- toggle between ProductsGrid and ProductsList

### ProductsList.jsx

1. Import Dependencies:

   - Import `formatPrice` from `'../utils'`.
   - Import `Link` and `useLoaderData` from `'react-router-dom'`.

2. Create ProductList Component:

   - Define a functional component named `ProductList`.

3. Component Structure:

   - Return a `div` element containing a list of products.

4. Loop Through Products:

   - Use the `useLoaderData` hook to get the `products` data from the loader.
   - Use the `map` function to loop through each product in the `products` array.

5. Product Link:

   - For each product, create a `Link` element that links to the individual product page.
   - Use the `product.id` as the link path (`to={`/products/${product.id}`}`).
   - Add CSS classes to style the link and apply hover effects.

6. Product Image:

   - Display the product image inside an `img` element.
   - Apply appropriate classes for styling and responsive design.
   - Add hover effect to the image using CSS classes.

7. Product Details:

   - Display the product title and company using `h3` and `h4` elements.
   - Add classes for font styles and responsiveness.

8. Product Price:

   - Display the formatted price using the `formatPrice` function.
   - Use a `p` element with appropriate classes for styling.

9. Export ProductList Component:
   - Export the `ProductList` component as the default export of the module.

### ProductsContainer.jsx

1. Import Dependencies:

   - Import `useLoaderData` from `'react-router-dom'`.
   - Import `ProductsGrid` and `ProductsList` from their respective paths.
   - Import `useState` from `'react'`.
   - Import `BsFillGridFill` and `BsList` from `'react-icons/bs'`.

2. Create ProductsContainer Component:

   - Define a functional component named `ProductsContainer`.

3. Component Structure:

   - Return a `div` element containing the products container.

4. Total Products Count:

   - Use the `useLoaderData` hook to get the `meta` data from the loader.
   - Extract the `total` count of products from `meta.pagination`.
   - Use a conditional statement to handle the plural form of the word "product".

5. Layout State and Styles:

   - Use the `useState` hook to manage the layout state (grid or list).
   - Create a helper function `setActiveStyles` to generate the CSS classes based on the active layout.
   - Return appropriate CSS classes for active and inactive layouts.

6. Header Section:

   - Create a `div` for the header section containing the product count and layout buttons.
   - Display the total number of products using the extracted `totalProducts` count.
   - Create a button for grid layout and a button for list layout.
   - Attach click event handlers to the buttons to set the layout state.

7. Products Display:

   - Create a `div` to display the products.
   - Use conditional rendering to handle cases where no products match the search or when products are present.
   - If no products match the search, display a message.
   - If products are present and the layout is 'grid', display the `ProductsGrid` component.
   - If products are present and the layout is 'list', display the `ProductsList` component.

8. Export ProductsContainer Component:
   - Export the `ProductsContainer` component as the default export of the module.

## Solution (24) - Products Container

ProductsList.jsx

```js
import { formatPrice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
          >
            <img
              src={image}
              alt={title}
              className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='ml-0 sm:ml-16'>
              <h3 className='capitalize font-medium text-lg'>{title}</h3>
              <h4 className='capitalize text-md text-neutral-content'>
                {company}
              </h4>

              {/* COLOR */}
            </div>

            <p className='font-medium ml-0 sm:ml-auto text-lg'>
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
```

ProductsContainer.jsx

```js
import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>

          <button
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
```

## Challenge (25) - Filters (Search Input)

- add size to prop FormInput.jsx
- render search input, submit button and reset button

## Solution (25) - Filters (Search Input)

FormInput.jsx

```js
const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
```

Filters.jsx

```js
import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';

const Filters = () => {
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm '>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
```

## Challenge (26) - Filters (Select Input)

- setup input for select input
- render for categories, companies and order
- companies and categories values are located in meta

### FormSelect.jsx

1. Create FormSelect Component:

   - Define a functional component named `FormSelect`.

2. Component Structure:

   - Return a `div` element containing the form select input.

3. Props:

   - Accept the following props: `label`, `name`, `list`, `defaultValue`, and `size`.

4. Label:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.

5. Select Input:

   - Create a `select` element for the input field.
   - Set the `name` and `id` attributes to the value of the `name` prop.
   - Apply the appropriate CSS classes for the select input using the `size` prop.
   - Set the `defaultValue` of the select input using the `defaultValue` prop.

6. Options:

   - Map through the `list` prop array to generate individual `option` elements.
   - Use each item in the `list` as the `key` and `value` attributes of the `option` element.

7. Export FormSelect Component:
   - Export the `FormSelect` component as the default export of the module.

## Solution (26) - Filters (Select Input)

FormSelect.jsx

```js
const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
```

Filters.jsx

```js
const { meta } = useLoaderData();

{
  /* CATEGORIES */
}
<FormSelect
  label='select category'
  name='category'
  list={meta.categories}
  size='select-sm'
/>;
{
  /* COMPANIES */
}
<FormSelect
  label='select company'
  name='company'
  list={meta.companies}
  size='select-sm'
/>;
{
  /* ORDER */
}
<FormSelect
  label='sort by'
  name='order'
  list={['a-z', 'z-a', 'high', 'low']}
  size='select-sm'
/>;
```

## Challenge (27) - Filters (Price)

- create range input (hint: you will need local state)

### FormRange.jsx

1. Create FormRange Component:

   - Define a functional component named `FormRange`.

2. Component Structure:

   - Return a `div` element containing the form range input and related elements.

3. Props:

   - Accept the following props: `label`, `name`, and `size`.

4. Default Values:

   - Define default values for `step`, `maxPrice`, and `selectedPrice`.

5. Label and Selected Price Display:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.
   - Display the selected price using the `formatPrice` function.

6. Range Input:

   - Create an `input` element with `type` set to `'range'`.
   - Set the `name`, `min`, `max`, `value`, and `step` attributes.
   - Use the `selectedPrice` state for the `value` attribute.
   - Set the `onChange` event handler to update `selectedPrice`.

7. Min and Max Price Display:

   - Create a `div` element for displaying minimum and maximum price values.
   - Use the `formatPrice` function for formatting and displaying max price.

8. Export FormRange Component:
   - Export the `FormRange` component as the default export of the module.

## Solution (27) - Filters (Price )

FormRange.jsx

```js
import { formatPrice } from '../utils';
import { useState } from 'react';
const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;
```

Filters.jsx

```js
{
  /* PRICE */
}
<FormRange label='select price' name='price' size='range-sm' />;
```

## Challenge (28) - Filters (Shipping)

- create checkbox input

### FormCheckbox.jsx

1. Create FormCheckbox Component:

   - Define a functional component named `FormCheckbox`.

2. Component Structure:

   - Return a `div` element containing the form checkbox input and related elements.

3. Props:

   - Accept the following props: `label`, `name`, `defaultValue`, and `size`.

4. Label Display:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.

5. Checkbox Input:

   - Create an `input` element with `type` set to `'checkbox'`.
   - Set the `name` attribute to match the `name` prop.
   - Set the `defaultChecked` attribute using the `defaultValue` prop.
   - Use the `size` prop to determine the checkbox size class.

6. Styling and Layout:

   - Apply appropriate classes to style and position the form control items.

7. Export FormCheckbox Component:
   - Export the `FormCheckbox` component as the default export of the module.

## Solution (28) - Filters (Shipping)

FormCheckbox.jsx

```js
const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control items-center'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
```

Filters.jsx

```js
{
  /* SHIPPING */
}
<FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' />;
```

## Challenge (29) - Global Loading

- create loading component
- check for loading state in HomeLayout
- toggle between loading and <Outlet>

### Loading.jsx

1. Create Loading Component:

   - Define a functional component named "Loading".

2. Component Structure:

   - Return a "div" element with CSS classes to center content both vertically and horizontally.

3. Loading Animation:

   - Inside the "div", include a "span" element with the classes "loading loading-ring loading-lg".
   - This applies a loading animation to create the visual effect.

4. Styling:

   - Use the provided CSS classes to style the loading animation.

5. Export Loading Component:
   - Export the "Loading" component as the default export of the module.

### HomeLayout.jsx

1. Create HomeLayout Component:

   - Define a functional component named "HomeLayout".

2. Import Dependencies:

   - Import "Outlet" and "useNavigation" from 'react-router-dom'.
   - Import "Navbar", "Loading", and "Header" from '../components'.

3. Component Structure:

   - Return a fragment ('<>...</>') to encapsulate the component's content.

4. UseNavigation Hook:

   - Use the "useNavigation" hook to access the navigation state.
   - Store whether the page is currently loading in "isPageLoading" variable.

5. Conditional Rendering:

   - Use a ternary operator to conditionally render content:
     - If "isPageLoading" is true, render the "Loading" component.
     - Otherwise, render a "section" element with CSS classes and include the "Outlet" component.

6. Header and Navbar:

   - Include the "Header" and "Navbar" components at the beginning of the component.

7. Styling:

   - Apply CSS classes to style the layout and align its elements.

8. Export HomeLayout Component:
   - Export the "HomeLayout" component as the default export of the module.

## Solution (29) - Global Loading

Loading.jsx

```js
const Loading = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <span className='loading loading-ring loading-lg' />
    </div>
  );
};
export default Loading;
```

```js
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Loading, Header } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
```

## Challenge (30) - Setup Params

- explore how to filter products
  [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#80a47ff5-cc24-494b-89e0-02cd92acc226)
- test in Thunder Client
- access params in loader
- use params in customFetch
- pass params down
- use params as default values (price in FormRange)
- setup reset button

## Solution (30) - Setup Params

Products.jsx

```js
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};
```

Filters.jsx

```js
import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';
const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />
      {/* ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm'
      />
      {/* PRICE */}
      <FormRange
        label='select price'
        name='price'
        price={price}
        size='range-sm'
      />
      {/* SHIPPING */}
      <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
        size='checkbox-sm'
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
```

```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
]);
```

It takes a URL string from the request.url property.
It creates a URL object from that URL string.
It extracts the query parameters using the searchParams property.
It converts the query parameters into an iterable of key-value pairs using the entries() method.
It spreads these key-value pairs into an array.
It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.

## Challenge (31) - Pagination

- explore how to paginate
- test in Thunder Client
- access meta
- display next, prev and page buttons
- add page value to query params

## Building the PaginationContainer Component

1. Import Required Modules:

- Import hooks and modules from `react-router-dom`:
  - `useLoaderData`
  - `useLocation`
  - `useNavigate`

2. Initialize Component:

- Create a functional component named `PaginationContainer`.

3. Retrieve Data with Hooks:

- Use the `useLoaderData` hook to get the `meta` data.
- Destructure `pageCount` and `page` from `meta.pagination`.
- Use the `useLocation` hook to get `search` and `pathname`.
- Use the `useNavigate` hook to get the `navigate` function.

4. Generate Pages Array:

- Create an array called `pages` using `Array.from()`.
  - This represents all the page numbers.

5. Handle Page Change:

- Create a function `handlePageChange` that takes `pageNumber` as an argument.
  - Update the URL's query string parameter `page` with the new page number.
  - Navigate to the updated URL.

6. Conditional Rendering:

- If `pageCount` is less than 2:
  - Return `null`.

7. Render Pagination Component:

- Render a `div` container with the class `mt-16 flex justify-end`.
  - Inside this, render another `div` with class `join`.
    - For "Prev" button:
      - Use the class `btn btn-xs sm:btn-md join-item`.
    - For page numbers:
      - Use the class `btn btn-xs sm:btn-md border-none join-item`.
      - Highlight the current page with classes `bg-base-300 border-base-300`.
    - For "Next" button:
      - Use the class `btn btn-xs sm:btn-md join-item`.

8. Export Component:

- Export the `PaginationContainer` component.

## Solution (31) - Pagination

PaginationContainer.jsx

```js
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
```

## Challenge (32) - Setup RTK and react-toastify

- create features/cart/cartSlice.js
- setup default state (README) and reducers
- export actions and cartSlice.reducer
- create store.js and add cartSlice
- setup RTK and react-toastify in main.jsx

## Building the `cartSlice` Redux Slice

1. **Import Required Modules**:

- Import functions from specific libraries:
  - `createSlice` from `@reduxjs/toolkit`
  - `toast` from `react-toastify`

2. **Initialize Default State**:

- Create a `defaultState` object with the following properties:
  - `cartItems` (array)
  - `numItemsInCart` (integer)
  - `cartTotal` (integer)
  - `shipping` (fixed value: 500)
  - `tax` (integer)
  - `orderTotal` (integer)

3. **Create the Redux Slice**:

- Use the `createSlice` function to create the `cartSlice`.
  - Name it as `'cart'`.
  - Use the previously created `defaultState` as the `initialState`.
  - Define several reducer functions within it:
    - `addItem`: Logs the payload when an item is added.
    - `clearCart`: Intended to clear all items from the cart.
    - `removeItem`: Intended to remove a specific item.
    - `editItem`: Intended to edit a specific item.

4. **Export Actions**:

- Destructure and export the following actions:
  - `addItem`
  - `removeItem`
  - `editItem`
  - `clearCart`

5. **Export Reducer**:

- Export the reducer generated by `cartSlice` for usage in the Redux store.

## Solution (32) - Setup RTK and react-toastify

features/cart/cartSlice.js

```js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state) => {},

    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

store.js

```js
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
```

main.jsx

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
// order
import './index.css';

import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center' />
  </Provider>
);
```

## Challenge (33) - Add Product (SingleProductPage)

- import and dispatch addItem action
- add item to cart in SingleProduct page

## Solution (33) - Add Product (SingleProductPage)

SingleProduct.jsx

```js
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
const SingleProduct = () => {
  const dispatch = useDispatch();
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      ....
      {/* CART BUTTON */}
      <div className='mt-10 '>
        <button className='btn btn-secondary btn-md' onClick={addToCart}>
          Add to bag
        </button>
      </div>
    </section>
  );
};
```

## Challenge (34) - AddItem Reducer

- display cartItems in Navbar
- setup addItem functionality

## Building the `addItem` Reducer

1. **Purpose**:

- This reducer updates the cart state when a product is added.

2. **Extract Product from Action**:

- Extract the `product` object from `action.payload`.

3. **Check for Existing Item**:

- Search for the product in the `cartItems` array based on the `cartID`.
- If the item already exists in the cart:
  - Increment the `amount` of the item in the cart by the `amount` of the `product`.

4. **Add New Item**:

- If the product does not exist in the cart:
  - Push the `product` directly into the `cartItems` array.

5. **Update Cart Totals**:

- Increase the `numItemsInCart` by the `amount` of the product.
- Increase the `cartTotal` by the product's `price` multiplied by its `amount`.

6. **Calculate Tax and Order Total**:

- Set `tax` as 10% of the `cartTotal`.
- Calculate the `orderTotal` as the sum of `cartTotal`, `shipping`, and `tax`.

7. **Save to Local Storage**:

- Convert the current state to a JSON string and store it in the browser's local storage under the key 'cart'.

8. **Notify User**:

- Use the `toast.success` method to display a success message: 'Item added to cart'.

## Solution (34) - AddItem Reducer

Navbar.jsx

```js
import { useSelector } from 'react-redux';
const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
```

cartSlice.js

```js
{
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Item added to cart');
    },
}

```

## Challenge (35) - Refactor and Setup Local Storage

- refactor addItem and get default state from local storage

### calculateTotals Reducer:

1. **Purpose**:

- Re-calculates the tax and order total for the cart.

2. **Calculate Tax and Order Total**:

- Set `tax` as 10% of the `cartTotal`.
- Determine the `orderTotal` as the sum of `cartTotal`, `shipping`, and `tax`.

3. **Save to Local Storage**:

- Convert the current state to a JSON string and save it in the browser's local storage under the key 'cart'.

## Solution (35) - Refactor and Setup Local Storage

```js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('item added to cart');
    },
    clearCart: (state) => {},

    removeItem: (state, action) => {},
    editItem: (state, action) => {},

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

## Challenge (36) - Clear Cart, Remove Item and Edit Item

- try to setup reducers for clear cart, remove item and edit item

## Building the Reducers

### clearCart Reducer:

1. **Purpose**:

- Clears the current cart state and resets it to the default state.

2. **Update Local Storage**:

- Store the `defaultState` in the browser's local storage under the key 'cart'.

3. **Return Default State**:

- Reset the entire cart state by returning `defaultState`.

### removeItem Reducer:

1. **Purpose**:

- Removes a specific item from the cart.

2. **Extract cartID from Action**:

- Extract the `cartID` from `action.payload`.

3. **Find Product**:

- Find the product in the `cartItems` array based on the `cartID`.

4. **Update Cart Items**:

- Filter out the product from `cartItems` array based on the `cartID`.

5. **Update Cart Totals**:

- Decrease the `numItemsInCart` by the `amount` of the product.
- Decrease the `cartTotal` by the product's `price` multiplied by its `amount`.
- Call the `calculateTotals` reducer to re-evaluate tax and order total.

6. **Notify User**:

- Use the `toast.error` method to display a message: 'Item removed from cart'.

### editItem Reducer:

1. **Purpose**:

- Modifies the amount of a specific item in the cart.

2. **Extract Data from Action**:

- Extract `cartID` and `amount` from `action.payload`.

3. **Find Item**:

- Find the item in the `cartItems` array based on the `cartID`.

4. **Update Cart Totals**:

- Adjust the `numItemsInCart` by the difference between the new amount and the item's previous amount.
- Update the `cartTotal` based on the item's `price` and the amount difference.
- Update the item's `amount` to the new amount.
- Call the `calculateTotals` reducer to re-evaluate tax and order total.

5. **Notify User**:

- Use the `toast.success` method to display a message: 'Cart updated'.

## Solution (36) - Clear Cart, Remove Item and Edit Item

```js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('item added to cart');
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error('Item removed from cart');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Cart updated');
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

```js
state.numItemsInCart += amount - item.amount;
```

The logic here is to update the total number of items in the cart (state.numItemsInCart) by adjusting it based on the difference between the provided amount and the existing quantity of that item (item.amount). If amount is greater than item.amount, it means that items are being added to the cart. If amount is less than item.amount, it means that items are being removed from the cart. If they are equal, it implies no change to the quantity of that item in the cart.

The result of the subtraction (amount - item.amount) is then added to the current state.numItemsInCart to reflect the new total number of items in the cart.

```js
state.cartTotal += item.price * (amount - item.amount);
```

In this line, the logic is calculating the change in the total cost of the cart (state.cartTotal) based on the price of the item (item.price) and the change in the quantity of that item (amount - item.amount). This calculation is then added to the current state.cartTotal.

If amount is greater than item.amount, it means more items are being added, so the cost of those additional items (difference between amount and item.amount) is calculated by multiplying it with the price of the item. If amount is less than item.amount, it means items are being removed, so the cost of those removed items is subtracted from the state.cartTotal. If they are equal, there is no change in the cost related to that item.

## Challenge (37) - Setup Cart Page

- create CartItemsList, CartTotals, CartItem components
- export CartItemsList, CartTotals in components/index.js
- setup two column layout in cart page

### CartPage.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` to enable access to the Redux store.
   - Bring in `CartItemsList`, `SectionTitle`, and `CartTotals` components from the `components` directory.
   - Import `Link` from `react-router-dom` for navigation capabilities.

2. **Create Cart Component**:

   - Define a functional component named `Cart`.

3. **Initialize State and Variables**:

   - Set a temporary variable `user` to `null`.
   - Use the `useSelector` hook to retrieve `numItemsInCart` from the Redux store's `cartState`.

4. **Component Logic**:

   - Check if `numItemsInCart` is zero.
     - If true, return the `SectionTitle` component with the text 'Your cart is empty'.
     - If there are items in the cart, continue to display the cart details.

5. **Component Structure**:

   - Render the `SectionTitle` component with the text 'Shopping Cart'.
   - Set up a grid layout (`mt-8 grid gap-8 lg:grid-cols-12`) to manage cart layout.
   - For displaying cart items:
     - Use 8 of 12 columns on large screens (`lg:col-span-8`).
     - Insert the `CartItemsList` component.
   - For displaying cart totals and the checkout/login button:
     - Use 4 of 12 columns on large screens (`lg:col-span-4 lg:pl-4`).
     - Place the `CartTotals` component.
     - Check if `user` is defined:
       - If true, provide a link to '/checkout' with the text 'Proceed to checkout'.
       - If false, provide a link to '/login' with the text 'please login'.

6. **Export Cart Component**:

   - Export the `Cart` component as the default export of the module.

## Solution (37) - Setup Cart Page

pages/Cart.jsx

```js
import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  // temp
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8  lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
```

## Challenge (38) - Cart Totals

- setup cart totals component

### CartTotals.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` for state retrieval from the Redux store.
   - Bring in `formatPrice` function from the `utils` directory for price formatting.

2. **Create CartTotals Component**:

   - Define a functional component named `CartTotals`.

3. **Retrieve State from Redux**:

   - Use the `useSelector` hook to get `cartTotal`, `shipping`, `tax`, and `orderTotal` from the Redux store's `cartState`.

4. **Component Structure**:

   - Enclose all content inside a `div` with the class `card bg-base-200`.
   - Use an inner `div` with the class `card-body` for structured content.
   - Display the Subtotal:
     - Use a `p` element with classes `flex`, `justify-between`, `text-xs`, `border-b`, and `border-base-300 pb-2`.
     - Use two nested `span` elements. The first displays "Subtotal", and the second displays the formatted `cartTotal`.
   - Display Shipping charges:
     - Similar to the Subtotal, but the text reads "Shipping" and the value is the formatted `shipping`.
   - Display Tax:
     - Similar format, but the text reads "Tax" and the value is the formatted `tax`.
   - Display Order Total:
     - Use a `p` element with classes `mt-4`, `flex`, `justify-between`, and `text-sm  pb-2`.
     - Use nested `span` elements with `font-bold` class. The first displays "Order Total", and the second displays the formatted `orderTotal`.

5. **Export CartTotals Component**:

   - Export the `CartTotals` component as the default export of the module.

## Solution (38) - Cart Totals

```js
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* Total */}
        <p className='mt-4 flex justify-between text-sm  pb-2'>
          <span className='font-bold'>Order Total</span>
          <span className='font-bold'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
```

## Challenge (39) - Cart Items List

- iterate over cartItems and return CartItem
- in CartItem display values and implement remove,edit functionality

### CartItemsList.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` to retrieve state from the Redux store.
   - Bring in `CartItem` component for item rendering.

2. **Create CartItemsList Component**:

   - Define a functional component named `CartItemsList`.

3. **Retrieve State from Redux**:

   - Use the `useSelector` hook to get `cartItems` from the Redux store's `cartState`.

4. **Component Structure**:

   - Create a wrapping `div`.
   - Use the `map` method on `cartItems` to loop through each item.
   - For each `item`, return a `CartItem` component:
     - Pass `item.cartID` as the `key` prop for React's list rendering optimization.
     - Pass the entire `item` object as the `cartItem` prop to the `CartItem` component.

5. **Export CartItemsList Component**:

   - Export the `CartItemsList` component as the default export of the module.

### CartItem.js

1. **Initialize Necessary Imports**:

   - Import utility functions `formatPrice` and `generateAmountOptions` from the `../utils` directory.
   - Import `removeItem` and `editItem` from the Redux slice named `cartSlice`.
   - Bring in `useDispatch` from `react-redux` for dispatching actions to the Redux store.

2. **Create CartItem Component**:

   - Define a functional component named `CartItem` that accepts a `cartItem` prop.

3. **Setup Redux Dispatch**:

   - Use the `useDispatch` hook and store the result in the `dispatch` constant.

4. **Functions for Event Handlers**:

   - Define `removeItemFromTheCart` function:
     - Dispatch the `removeItem` action, passing the `cartID` from the cart item.
   - Define `handleAmount` function:
     - Dispatch the `editItem` action, updating the `amount` for the cart item identified by `cartID`.

5. **Destructure cartItem Prop**:

   - Extract necessary fields from `cartItem` including `cartID`, `title`, `price`, `image`, `amount`, `company`, and `productColor`.

6. **Component Structure**:

   - Create an `article` element wrapping the entire cart item.
     - Embed the product image using an `img` element.
     - Display product information using a `div`:
       - Show the product `title`, `company`, and `color` using corresponding elements.
     - Render the product amount using a `div` containing a dropdown `select`.
     - Provide a `button` to remove the item from the cart.
     - Display the product price using a `p` element.

7. **Export CartItem Component**:

   - Export the `CartItem` component as the default export of the module.

## Solution (39) - Cart Items List

CartItemsList.jsx

```js
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemsList;
```

CartItem.jsx

```js
import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartID}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* INFO */}
      <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>
          {company}
        </h4>
        {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className='mt-2 link link-primary link-hover text-sm'
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
```

CartItem.jsx

```js
<div className='sm:ml-12'>
  {/* AMOUNT */}
  {/* REMOVE */}
</div>
```

## Challenge (40) - Setup User Slice

- setup user slice
- add to store

### userSlice.js

- create features/user/userSlice.js
- Import Dependencies:

  - Import `createSlice` from `'@reduxjs/toolkit'`.
  - Import `toast` from `'react-toastify'`.

- Define Initial State:

  - Create an `initialState` object with default values for `user` and `theme`.

- Create Redux Slice:

  - Use `createSlice` to define a Redux slice named `'user'`.
  - Set the slice name to `'user'`.
  - Use the `initialState` object as the initial state.

- Define Reducer Functions:

  - Create the `loginUser` reducer function with the signature `(state, action) => {}`.

    - Inside the function, log a message like `'login'`.

  - Create the `logoutUser` reducer function with the signature `(state) => {}`.

    - Inside the function, log a message like `'logout'`.

  - Create the `toggleTheme` reducer function with the signature `(state) => {}`.
    - Inside the function, log a message like `'toggle theme'`.

- Export Actions:
  - Export the action creators:
    - `loginUser`
    - `logoutUser`
    - `toggleTheme`

## Solution (40) - Setup User Slice

```js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  user: { username: 'coding addict' },
  theme: 'dracula',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      console.log('toggle theme');
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
```

store.js

```js
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
```

## Challenge (41) - Move Theme Logic

- move theme logic from Navbar to userSlice

## Solution (41) - Move Theme Logic

userSlice.js

```js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { username: 'coding addict' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
```

Navbar.js

```js
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element '>
        <div className='navbar-start'>
          {/* Title */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center '
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME ICONS */}
          <label className='swap swap-rotate '>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={handleTheme} />

            {/* sun icon */}
            <BsSunFill className='swap-on h-4 w-4' />

            {/* moon icon */}
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          {/* CART LINK*/}
          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
```
## Additional Logic

Navbar.jsx

```js
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const theme = useSelector((state) => state.userState.theme);
  const isDarkTheme = theme === 'dracula';

  return (...
          {/* THEME SETUP */}
          <label className='swap swap-rotate'>
            <input
              type='checkbox'
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            {/* sun icon*/}
            <BsSunFill className='swap-on h-4 w-4' />
            {/* moon icon*/}
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          );
          ...
};
export default Navbar;
```


## Challenge (42) - Setup Logout and Access User

- setup logout reducer
- access user in Header, NavLinks and Cart Page

## Solution (42) - Setup Logout And Access User

userSlice.js

```js
logoutUser: (state) => {
      state.user = null;
      // localStorage.clear()
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
```

Header.js

```js
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <header className=' bg-neutral py-2 text-neutral-content '>
      <div className='align-element flex justify-center sm:justify-end '>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-xs btn-outline btn-primary '
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Sign in / Guest
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
```

NavLinks.jsx

```js
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) return null;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
```

```js
const Cart = () => {
  // temp
  const { user } = useSelector((state) => state.userState);
};
```

## Challenge (43) - Register User

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - register request
- test in Thunder Client
- setup action in Register
- add action to Register route in App.jsx

### Register.js

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `customFetch` from `'../utils'`.
  - Import `toast` from `'react-toastify'`.

- Define an asynchronous function named `action` that takes an object with a property named `request` as its parameter.

- Inside the `action` function:

  - Use the `request` object to get form data using the `formData` method.
  - Convert the form data to an object using `Object.fromEntries(formData)` and store it in the `data` variable.

- Use a `try` block to handle the registration process:

  - Send a POST request using `customFetch.post` to the `/auth/local/register` endpoint with the `data`.
  - If the request is successful:
    - Display a success toast message using `toast.success`.
    - Redirect the user to the `/login` page using `redirect('/login')`.

- Use a `catch` block to handle errors:
  - If an error occurs, extract the error message from the response data, if available, or provide a default error message.
  - Display the error message using `toast.error`.
  - Return `null` to indicate that an error occurred.

## Solution (43) - Register User

Register.jsx

```js
import { FormInput, SubmitBtn } from '../components';
import { Form, redirect, Link } from 'react-router-dom';

import { customFetch } from '../utils';
import { toast } from 'react-toastify';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 py-8 px-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>

        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
```

## Challenge (44) - Login Setup

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - login request
- test in Thunder Client
- setup action in login and access store

## Solution (44) - Login Setup

App.jsx

```js
import { action as loginAction } from './pages/Login';

import { store } from './store';
{
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
```

Login.jsx

```js
export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    return store;
  };
```

### Challenge (45) - Login User

### Login.jsx

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `customFetch` from `'../utils'`.
  - Import `toast` from `'react-toastify'`.
  - Import `loginUser` from `'../features/user/userSlice'`.
  - Import `useDispatch` from `'react-redux'`.

- Define a function named `action` that takes a parameter `store` and returns an asynchronous function that takes an object with a property named `request`.

- Inside the inner asynchronous function:

  - Use the `request` object to get form data using the `formData` method.
  - Convert the form data to an object using `Object.fromEntries(formData)` and store it in the `data` variable.

- Use a `try` block to handle the login process:

  - Send a POST request using `customFetch.post` to the `/auth/local` endpoint with the `data`.
  - If the request is successful:
    - Dispatch the `loginUser` action with the response data using `store.dispatch`.
    - Display a success toast message using `toast.success`.
    - Redirect the user to the home page using `redirect('/')`.

- Use a `catch` block to handle errors:
  - If an error occurs, log the error to the console.
  - Extract the error message from the response data, if available, or provide a default error message.
  - Display the error message using `toast.error`.
  - Return `null` to indicate that an error occurred.

### Solution (45) - Login User

userSlice.js

```js
loginUser: (state, action) => {
      console.log(action.payload);
    },
```

Login.jsx

```js
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/auth/local', data);

      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');
      return redirect('/');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      toast.error(errorMessage);
      return null;
    }
  };
```

userSlice.js

```js
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
```

## Challenge (46) - Demo User

- remove defaultValue from inputs

### loginAsGuestUser

- Create a function named `loginAsGuestUser`.
- Mark the function as `async` to indicate that it contains asynchronous operations.
- Wrap the entire function body in a `try` block to handle potential errors.
- Inside the `try` block, use the `customFetch.post` method to send a POST request.
- Provide the endpoint URL `/auth/local`.
- Pass an object with `identifier` and `password` properties as the request body.
- Assign the response from the `customFetch.post` call to the `response` variable.- If the request is successful, dispatch an action (e.g., `loginUser`) with the `response.data`.
- Use the `toast.success` method to display a success message (e.g., 'welcome guest user').
- If the action dispatch and toast success are successful, use the `navigate` function to navigate to a specific route (e.g., `'/'`).
- If any error occurs within the `try` block, it will be caught by the `catch` block.
- Inside the `catch` block, use `console.log` to log the error for debugging purposes.
- Display an error message using the `toast.error` method to notify the user about the login error.

## Solution (46) - Demo User

Login.jsx

```js
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  };
};

<button
  type='button'
  className='btn btn-secondary btn-block'
  onClick={loginAsGuestUser}
>
  guest user
</button>;
```

## Challenge (47) - Checkout Page Setup

- create CheckoutForm component

### Checkout.jsx

- Import Dependencies:

  - Import `useSelector` from `'react-redux'`.
  - Import `CheckoutForm`, `SectionTitle`, and `CartTotals` from `'../components'`.

- Create the `Checkout` component:

  - Inside the component, use `useSelector` to access the `cartTotal` from the Redux store.
  - Check if the `cartTotal` is empty.
  - If the `cartTotal` is empty, return a `SectionTitle` component with the text 'Your cart is empty'.
  - If the `cartTotal` is not empty:
    - Return a `SectionTitle` component with the text 'Place your order'.
    - Render a `<div>` element with the class name 'mt-8 grid gap-8 md:grid-cols-2 items-start'.
    - Inside the `<div>`, render the `CheckoutForm` component and the `CartTotals` component.

- Export the `Checkout` component as the default export.

## Solution (47) - Checkout Page Setup

Checkout.jsx

```js
import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
```

## Challenge (48) - Restrict Access

App.jsx

- in App.jsx import loader from Checkout page
- pass store into the checkoutLoader
- if no user redirect to login

### Checkout.jsx

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `toast` from `'react-toastify'`.

- Create a `loader` function:

  - The `loader` function takes a `store` as a parameter.
  - Inside the `loader` function:
    - Get the `user` from the Redux store using `store.getState().userState.user`.
    - Check if the `user` is falsy (not logged in).
    - If the `user` is falsy:
      - Display a toast warning message using `toast.warn()` with the text 'You must be logged in to checkout'.
      - Return `redirect('/login')` to redirect the user to the login page.
    - If the `user` is truthy (logged in):
      - Return `null`.

- Export the `loader` function.

## Solution (48) - Restrict Access

App.jsx

```js
import { loader as checkoutLoader } from './pages/Checkout';

import { store } from './store';

const router = createBrowserRouter([
  {
   ....
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),

      },

  },

]);

```

Checkout.jsx

```js
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};
```

## Challenge (49) - CheckoutForm

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - create order request
- test in Thunder Client

### App.jsx

- in App.jsx import action from CheckoutForm.jsx
- pass store into the checkoutAction

## CheckoutForm.jsx

- Import Dependencies:

  - Import `Form` and `redirect` from `'react-router-dom'`.
  - Import `FormInput` and `SubmitBtn` from appropriate paths.
  - Import other required utilities and actions.

- Create an `action` function:

  - The `action` function takes a `store` as a parameter and returns an asynchronous function that takes a `request` parameter.
  - Inside the async function:
    - Await `request.formData()` to get form data.
    - Destructure the `name` and `address` properties from the form data using `Object.fromEntries(formData)`.
    - Get the `user` from the Redux store using `store.getState().userState.user`.
    - Get the `cartItems`, `orderTotal`, and `numItemsInCart` from the Redux store using `store.getState().cartState`.
    - Create an `info` object containing the gathered information.
    - Try to make a POST request to '/orders' with the `info` data and the user's token in the headers.
    - If successful:
      - Dispatch the `clearCart()` action using `store.dispatch(clearCart())` to clear the cart.
      - Display a success toast message using `toast.success()` with the text 'order placed successfully'.
      - Return `redirect('/orders')` to redirect the user to the orders page.
    - If there's an error:
      - Log the error.
      - Get the error message from the response data or provide a default message.
      - Display an error toast message using `toast.error()` with the error message.
      - Return `null`.

- Create a `CheckoutForm` component:

  - Inside the component:
    - Use the `Form` component from 'react-router-dom' to create a form.
    - Display a heading for the shipping information.
    - Use the `FormInput` component to create input fields for the first name and address.
    - Use the `SubmitBtn` component to create a submit button with the text 'Place Your Order'.

- Export the `CheckoutForm` component.

## Solution (49) - CheckoutForm

App.jsx

```js
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
    ],
  },
]);
```

CheckoutForm.jsx

```js
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';

      toast.error(errorMessage);
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl'>Shipping Information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='Place Your Order' />
      </div>
    </Form>
  );
};
export default CheckoutForm;
```

## Challenge (50) - Auth Error

- handle auth errors
- check for response.status
  - if status === 401 redirect to login

## Solution (50) - Auth Error

CheckoutForm.jsx

```js

 catch (error) {
  console.log(error);
  const errorMessage =
    error?.response?.data?.error?.message ||
    'there was an error placing your order';
  toast.error(errorMessage);
  if (error?.response?.status === 401 || 403) return redirect('/login');

  return null;
}
```

## Challenge (51) - Orders Request Overview

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - orders request
- test in Thunder Client

## Solution (51) - Orders Request Overview

## Challenge (52) - Orders Page Setup

- create components/OrdersList.jsx (export)
- create loader (import/setup in App.jsx and provide store)
- restrict access to page
- make a request to get all users
- grab all the query params
- return orders and meta

### Orders.jsx

1. **Import Dependencies:**

   - Import the required modules and components from 'react-router-dom', 'react-toastify', and other custom files.

2. **Define Loader Function:**

   - Create a loader function that takes the `store` parameter and an object with a `request` property.
   - Within the loader function:
     - Retrieve the user information from the Redux store.
     - Check if the user is logged in. If not, display a warning toast and redirect to the login page.
     - Parse query parameters from the URL.
     - Use the `customFetch` utility to make a GET request to the '/orders' endpoint.
     - Handle successful responses by returning the fetched orders data and meta information.
     - Handle errors by displaying appropriate error messages using toast and optionally redirecting if unauthorized.
     - Return `null` if an error occurs.

3. **Define Orders Component:**

   - Create a functional component named `Orders`.
   - Within the component:
     - Return JSX that displays a heading element with the text "orders".

4. **Export Loader Function:**

   - Export the defined loader function.

5. **Export Orders Component:**
   - Export the `Orders` component as the default export of the module.

## Solution (52) - Orders Page Setup

App.jsx

```js
import { loader as ordersLoader } from './pages/Orders';

{
  path: 'orders',
  element: <Orders />,
  loader: ordersLoader(store),
},
```

Orders.jsx

```js
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');

      return null;
    }
  };
const Orders = () => {
  return <h1 className='text-3xl'>orders</h1>;
};
export default Orders;
```

## Challenge (53) - Render Orders

### Orders.jsx

- Import Dependencies:

  - Import necessary components and hooks from your project's dependencies.

- Define Component:

  - Define a functional component named `Orders`.

- Fetch Data:

  - Use the `useLoaderData` hook to access data from the loader context.
  - Check if the `meta.pagination.total` value is less than 1 to determine if there are no orders.

- Conditional Rendering:

  - If there are no orders, return a component, such as `<SectionTitle />`, with a message like 'Please make an order'.

- Orders Rendering:

  - If there are orders, return the following components:
    - `<SectionTitle />` with the text 'Your Orders'.
    - `<OrdersList />` component to display the list of orders.
    - `<PaginationContainer />` component for handling pagination.

- Export Component:
  - Export the `Orders` component as the default export.

### OrdersList.jsx

- Import Dependencies:

  - Import `useLoaderData` from `'react-router-dom'`.
  - Import `day` and `advancedFormat` from `'dayjs'`.
  - Extend dayjs with the `advancedFormat` plugin using `day.extend(advancedFormat)`.

- Create the `OrdersList` component:

  - Inside the component:
    - Use the `useLoaderData()` hook to get data from loader data.
    - Destructure `orders` and `meta` from the loaded data.
    - Return the orders list interface:
      - Display the total number of orders using the `meta.pagination.total` value.
      - Create a table to display order information.
      - Define table headings: Name, Address, Products, Cost, and Date.
      - Use `.map()` to iterate over each order and generate table rows:
        - Destructure relevant attributes from the `order` object.
        - Format the `createdAt` date using dayjs to display in 'hh:mm a - MMM Do, YYYY' format.
        - Return a table row with the extracted data.

- Export the `OrdersList` component.

## Solution (53) - Render Orders

Orders.jsx

```js
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};
export default Orders;
```

OrdersList.jsx

```js
import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();
  return (
    <div className='mt-8'>
      <h4 className='mb-4 capitalize'>
        total orders : {meta.pagination.total}
      </h4>
      <div className='overflow-x-auto '>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className='hidden sm:block'>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format('hh:mm a - MMM Do, YYYY ');
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className='hidden sm:block'>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersList;
```

## Challenge (54) - Complex Pagination

- create ComplexPaginationContainer.jsx
- render in Orders.jsx

### ComplexPaginationContainer.jsx

- Import Dependencies:

  - Import `useLoaderData`, `useLocation`, and `useNavigate` from `'react-router-dom'`.

- Create the `ComplexPaginationContainer` component:

  - Inside the component:
    - Use the `useLoaderData()` hook to get data from loader data.
    - Destructure `meta.pagination` to get `pageCount` and `page`.
    - Use the `useLocation()` hook to get the current location's search and pathname.
    - Use the `useNavigate()` hook to get the navigation function.
    - Create a `handlePageChange` function that:
      - Constructs a new URLSearchParams from the current search.
      - Sets the 'page' parameter in the search to the specified `pageNumber`.
      - Uses the navigate function to change the URL with the updated search.
    - Create an `addPageButton` function that returns a button element with the appropriate classes and onClick handler.
    - Create a `renderPageButtons` function that generates an array of page buttons, including ellipses and the current page button.
    - Use conditional checks to handle rendering of first, last, and ellipsis buttons.
    - Return `null` if `pageCount` is less than 2.
    - Return the pagination interface containing the "Prev," page buttons, and "Next" buttons.

- Export the `ComplexPaginationContainer` component.

## Solution (54) - Complex Pagination

ComplexPaginationContainer.jsx

```js
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300 ' : ''
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // dots
    if (page > 2) {
      pageButtons.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
          ...
        </button>
      );
    }

    // active/current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-2'>
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationContainer;
```

## Challenge (55) - Setup React Query

- import and setup react query in App.jsx
- pass query client down to
  - Landing Page
  - SingleProduct Page
  - Products Page
- refactor loaders

## Solution (55) - Setup React Query

App.jsx

```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
```

Landing.js

```js
export const loader = (queryClient) => async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};
```

## Challenge (56) - Landing

- setup react query and invoke in loader

## Solution (56) - Landing

Landing.jsx

```js
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};
```

## Challenge (57) - Single Product

- setup react query and invoke in loader

## Solution (57) - Single Product

SingleProduct.jsx

```js
const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };
```

## Challenge (58) - All Products

- setup react query and invoke in loader

## Solution (58) - All Products

Products.jsx

```js
const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );

    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };
```

?? === This operator is known as the nullish coalescing operator in JavaScript. It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

In simpler terms, the ?? operator is used to provide a default value for potentially null or undefined variables.

## Challenge (59) - Orders

setup react query and invoke in loader

## Solution (59) - Orders

```js
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from '../components';

export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return {
        orders: response.data.data,
        meta: response.data.meta,
      };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
```

## Challenge (60) - Remove Queries

- remove "orders" query in CheckoutForm and Header

## Solution (60) - Remove Queries

CheckoutForm.jsx

```js
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    ...
    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // remove query
      queryClient.removeQueries(['orders']);
      // rest of the code
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } ...
  };
```

Header.jsx

```js

import { useQueryClient } from '@tanstack/react-query';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const queryClient = useQueryClient();
  const handleLogout = async () => {
    navigate('/');
    dispatch(logoutUser());
    dispatch(clearCart());
    queryClient.removeQueries();
  };
  ...
}

```
