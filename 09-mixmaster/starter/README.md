## Steps

#### Install and Setup

- npm install
- npm run dev

#### SPA

SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

[React Router](https://reactrouter.com/en/main)

```sh
npm i react-router-dom@6.11.2
```

App.jsx

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

#### Setup Pages

- pages are components
- create src/pages
- About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
- export from index.js

pages/index.js

```js
export { default as Landing } from './Landing';
export { default as About } from './About';
export { default as Cocktail } from './Cocktail';
export { default as Newsletter } from './Newsletter';
export { default as HomeLayout } from './HomeLayout';
export { default as Error } from './Error';
```

App.jsx

```js
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages';
```

#### Link Component

HomeLayout.jsx

```js
import { Link } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to='/about'>About</Link>
    </div>
  );
};
export default HomeLayout;
```

About.jsx

```js
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Back Home</Link>
    </div>
  );
};
export default About;
```

#### Nested Pages

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
```

HomeLayout.jsx

```js
import { Link, Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
```

App.jsx

```js
{
  index:true
  element: <Landing />,
}
```

#### Navbar

- create components/Navbar.jsx

Navbar.jsx

```js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- setup in HomeLayout

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from 'styled-components';

const El = styled.el`
  // styles go here
`;
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs

```js
import styled from 'styled-components';
const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;
```

#### Alternative Setup

- style entire react component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- only responsible for styling

#### Assets

- wrappers folder in assets

Navbar.jsx

```js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 1px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Navbar;
```

#### About Page

About.jsx

```jsx
import Wrapper from '../assets/wrappers/AboutPage';

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </p>
    </Wrapper>
  );
};

export default About;
```

#### Page CSS

HomeLayout.jsx

```js
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
```

index.css

```css
.page {
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem;
}
```

#### Error Page

- wrong url

Error.jsx

```js
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
```

#### Error Page - CSS (optional)

assets/wrappers/ErrorPage.js

```js
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
```

#### Fetch

- useEffect approach

Landing.jsx

```js
const fetchSomething = async () => {
  try {
    const response = await axios.get('/someUrl');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSomething();
}, []);
```

#### Loader

Each route can define a "loader" function to provide data to the route element before it renders.

- must return something even "null" otherwise error

Landing.jsx

```js
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};
export default Landing;
```

```js
import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      // alternative approach
      {
        index: true,
        loader: () => {
          // do stuff here
        },
        element: <Landing />,

      },
      // rest of the routes
    ],
  },
]);
```

#### TheCocktailDB

[API](https://www.thecocktaildb.com/)

- Search cocktail by name
  www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
- Lookup full cocktail details by id
  www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

#### Landing - Fetch Drinks

Landing.jsx

```js
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);
  return <h1>Landing page</h1>;
};

export default Landing;
```

- empty search term returns some default drinks
- if search term yields not drinks drinks:null

#### More Errors

- bubbles up
- no return from loader
- wrong url

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <h2>There was an error...</h2>,
        element: <Landing />,
      },
    ],
  },
]);
```

#### SinglePageError Component

- create pages/SinglePageError.jsx
- export import (index.js)
- use it in App.jsx

```js
import { useRouteError } from 'react-router-dom';
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>{error.message}</h2>;
};
export default SinglePageError;
```

#### More Components

- in src/components create SearchForm, CocktailList, CocktailCard
- render SearchForm and CocktailList in Landing
- pass drinks, iterate over and render in CocktailCard

Landing.jsx

```js
const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();

  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};
```

CocktailList.jsx

```jsx
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
```

```jsx
import { Link, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';
const CocktailCard = ({ image, name, id, info, glass }) => {
  // const data = useOutletContext();
  // console.log(data);
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
```

#### CocktailList and CocktailCard CSS (optional)

#### Global Loading and Context

HomeLayout.jsx

```js
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigation } from 'react-router-dom';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
```

#### Single Cocktail

App.jsx

```js
import { loader as singleCocktailLoader } from './pages/Cocktail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      // rest of the routes
    ],
  },
]);
```

Cocktail.jsx

```js
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../assets/wrappers/CocktailPage';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img'></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>instructons :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
```

#### Additional Check

```js
const Cocktail = () => {
  import { Navigate } from 'react-router-dom';
  const { id, data } = useLoaderData();
  // if (!data) return <h2>something went wrong...</h2>;
  if (!data) return <Navigate to='/' />;
  return <Wrapper>....</Wrapper>;
};
```

#### Single Cocktail CSS (optional)

assets/wrappers/CocktailPage.js

```js
import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }

  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
```

#### Setup React Toastify

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </React.StrictMode>
);
```

#### Newsletter

Newsletter.jsx

```js
const Newsletter = () => {
  return (
    <form className='form'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          defaultValue='john'
        />
      </div>
      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          defaultValue='smith'
        />
      </div>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};

export default Newsletter;
```

#### Default Behavior

The "method" attribute in an HTML form specifies the HTTP method to be used when submitting the form data to the server. The two commonly used values for the "method" attribute are:

GET: This is the default method if the "method" attribute is not specified. When the form is submitted with the GET method, the form data is appended to the URL as a query string. The data becomes visible in the URL, which can be bookmarked and shared. GET requests are generally used for retrieving data from the server and should not have any side effects on the server.

POST: When the form is submitted with the POST method, the form data is included in the request payload rather than being appended to the URL. POST requests are typically used when submitting sensitive or large amounts of data to the server, as the data is not directly visible in the URL. POST requests can have side effects on the server, such as updating or inserting data.

- action attribute

  The "action" attribute in an HTML form specifies the URL or destination where the form data should be sent when the form is submitted. It defines the server-side script or endpoint that will receive and process the form data.

If the action attribute is not provided in the HTML form, the browser will send the form data to the current URL, which means it will submit the form to the same page that the form is on. This behavior is referred to as a "self-submitting" form.

#### FormData API

- covered in React fundamentals
  [JS Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8)

- a great solution when you have bunch of inputs
- inputs must have name attribute

The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

#### React Router - Action

Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.

Newsletter.jsx

```js
import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return 'something';
};

const Newsletter = () => {
  return (
    <Form className='form' method='POST'>
    .....)
}
```

App.jsx

```js
import { action as newsletterAction } from './pages/Newsletter';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
]);
```

#### Newsletter Request

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

Newsletter.jsx

```js
import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  console.log(response);
  return response;
};
```

#### Try/Catch

Newsletter.jsx

```js
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
```

#### Submit State

Newsletter.jsx

```js
import { Form, useNavigation } from 'react-router-dom';

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className='form' method='POST'>
      ....
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting...' : 'submit'}
      </button>
    </Form>
  );
};
```

#### Attributes

- remove defaultValue and add required
- cover required and defaultValue

#### Search Form - Setup

components/SearchForm.jsx

```js
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';
const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue='vodka'
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
```

#### Query Params

Landing.jsx

```js
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};
```

const url = new URL(request.url);
This line of code creates a new URL object using the URL constructor. The URL object represents a URL and provides methods and properties for working with URLs. In this case, the request.url is passed as an argument to the URL constructor to create a new URL object called url.

The request.url is an input parameter representing the URL of an incoming HTTP request. By creating a URL object from the provided URL, you can easily extract specific components and perform operations on it.

const searchTerm = url.searchParams.get('search') || '';
This line of code retrieves the value of the search parameter from the query string of the URL. The searchParams property of the URL object provides a URLSearchParams object, which allows you to access and manipulate the query parameters of the URL.

The get() method of the URLSearchParams object retrieves the value of a specific parameter by passing its name as an argument. In this case, 'search' is passed as the parameter name. If the search parameter exists in the URL's query string, its value will be assigned to the searchTerm variable. If the search parameter is not present or its value is empty, the expression '' (an empty string) is assigned to searchTerm using the logical OR operator (||).

#### Controlled Input (kinda/sorta)

Landing.js

```js
const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
```

SearchForm.jsx

```js
const SearchForm = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        .....
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
```

#### React Query - Setup

App.jsx

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
...
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

#### React Query - Landing Page

Landing.jsx

```js
import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { searchTerm };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
```

#### React Query - Landing Page Loader

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        element: <Landing />,
      },
    ],
  },
]);
```

Landing.jsx

```js
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { searchTerm };
  };
```

#### React Query - Cocktail

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
    ....
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader(queryClient),
        errorElement: <h2>There was an error...</h2>,
        element: <Cocktail />,
      },
      ....
    ],
  },
]);
```

Cocktail.jsx

```js
import { useQuery } from '@tanstack/react-query';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  // rest of the code
};
```

#### Redirects

- in public folder create "\_redirects"

```
/* /index.html 200
```
