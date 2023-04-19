## Figma URL

[Unsplash Images](https://www.figma.com/file/O2MaAAlr4nznh7m53azatL/Unsplash-images?node-id=0%3A1&t=cYDOCgqOs9IX2If0-1)

## Steps

#### Setup

- npm install
- npm run dev

#### Initial Structure and Global Context

Create three components - ThemeToggle, SearchForm and Gallery. Render all of them in App.jsx, and setup global context.

#### Dark Theme - Initial Setup

In the context of creating a state value called 'isDarkTheme' (boolean) and a helper function called 'toggleDarkTheme', set 'isDarkTheme' to the opposite value when 'toggleDarkTheme' is invoked. Pass 'isDarkTheme' and 'toggleDarkTheme' down to 'ThemeToggle'. In 'ThemeToggle', import two icons from the React Icons library (moon and sun) and create a button. When the button is clicked, invoke 'toggleDarkTheme', and display the appropriate icon based on the value of 'isDarkTheme' inside of the button.

#### Dark Theme Class

In the toggleDarkTheme add logic to add and remove .dark-theme class to body element based on isDarkTheme value.

#### Dark Theme - CSS

Create CSS variables for the background color and text color for both dark mode and normal mode, as well as a CSS variable for the dark mode transition.

```css
:root {
  /* dark mode setup */
  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);

  --darkModeTransition: color 0.3s ease-in-out, background-color 0.3s
      ease-in-out;
}

.dark-theme {
  --textColor: var(--dark-mode-text-color);
  --backgroundColor: var(--dark-mode-bg-color);
}

body {
  transition: var(--darkModeTransition);
  background: var(--backgroundColor);
  color: var(--textColor);
}
```

#### User Prefers Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --textColor: var(--dark-mode-text-color);
    --backgroundColor: var(--dark-mode-bg-color);
  }
}
```

#### SearchForm Structure

Create a form with an input and a submit button. The input should have the following attributes: type='text', name='search', placeholder='cat', and className='form-input search-input'. When the user submits the form, access (for now log)the input value.

#### Unsplash Info

Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications. The Unsplash API is widely used by developers to enhance the visual content of their applications or websites.

[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)

In order to use the Unsplash API to fetch images for your application, you will need to sign up for an account with Unsplash. This will allow you to obtain an API key that you can use to authenticate your requests.

#### Find the API Key and Correct URL for Searching Images

- register an app
- authorization (hint : public authentication)
- search functionality (hint : search photos)

After signing up for an Unsplash account, you will need to locate your API key and the correct URL to use when searching for images using the Unsplash API. This information can be found in the API documentation provided by Unsplash.

#### Test the URL Using Thunder Client VS Code Extension

Before implementing the API in your application, it is a good practice to test the URL using a tool like Thunder Client VS Code Extension. This will allow you to verify that the URL is correct and that you are able to successfully retrieve images using the API.

#### Install and Setup React Query in Gallery Component

React Query is a library that can be used to handle API requests in React applications. To fetch images from the Unsplash API, you will need to install and set up React Query in your Gallery component.

#### Install and Setup React Query Dev Tools

React Query dev tools provide a way to inspect and debug React Query data and caching behavior. To use this tool, you will need to install and set up the React Query dev tools in your application.

#### Create a searchValue State Value in Context.jsx

In order to implement search functionality in your application, you will need to create a state value to store the user's search input. This can be done in a context file, such as context.jsx.

#### Fix the useQuery

After setting up React Query and creating the searchValue state value, you will need to modify the useQuery function to fetch images based on the user's search input.

#### Check Whether User Prefers Dark Mode with JavaScript

To provide a better user experience, you can check whether the user prefers dark mode using JavaScript. This can be done by accessing the user's system preferences and setting the theme of your application accordingly.

#### Setup Local Storage to Store isDarkTheme State Value

To persist the user's preferred theme across sessions, you can store the isDarkTheme state value in local storage. This will allow the theme to be preserved even if the user closes and reopens the application.

#### Setup ENV Variables in VITE

Environment variables can be used to store sensitive information, such as your Unsplash API key. In order to use environment variables in your application, you will need to set them up in VITE, a build tool for modern web development.

#### Deploy the Application to Netlify and Setup ENV Variables

Once your application is complete, you can deploy it to a hosting platform such as Netlify. When deploying to Netlify, you will need to set up your environment variables to ensure that your application can access your Unsplash API key.

#### Add CSS

Finally, you can add CSS to your application to style the components and provide a polished user interface.

## Additional Info

#### Dark Theme Class - Code

```js
const body = document.querySelector('body');
body.classList.toggle('dark-theme', newDarkTheme);

// alternative setup
document.body.classList.toggle('dark-theme', newDarkTheme);
```

const body = document.querySelector('body'); - This line selects the body element of the current document using the document.querySelector() method, which returns the first element that matches the specified selector. In this case, it is selecting the body element.

body.classList.toggle('dark-theme', isDarkTheme); - This line toggles the dark-theme class of the body element. The classList property is a read-only list that contains the classes of an element. The toggle() method adds a class to the element if it does not have it, or removes it if it does. In this case, it adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.

#### Elements Property

The elements property of the event.target object in the handleSubmit function refers to an HTMLCollection containing all the form controls (i.e., input, select, textarea, button, etc.) inside the <form> element.

This is useful because you can use the elements collection to get the values of the form controls when the form is submitted. For example, e.target.elements.search.value would give you the value of the search input field when the form is submitted.

#### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.

When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.

The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.

Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.

#### Vite ENV Vars

- .env : must be included in .gitignore
