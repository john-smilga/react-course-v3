## Figma URL

[Color generator](https://www.figma.com/file/P2SJ5QGOZvi49EOpoVTvsT/Color-generator?node-id=0%3A1&t=ZY2gnIJ9zGTSXPW8-1)

## Steps

#### Setup

Create three components: Form, ColorList, and SingleColor.

In the App component, render the Form and ColorList components.

#### Form Component

In the Form component, set up a color state value and a form with an two input fields (color and text). Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.

[HTML Color Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

#### Values.js

Install the values.js library and use it to generate a list of colors in the App component.

[Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

```sh
npm i values.js

```

```js
import Values from 'values.js';
new Values('#f15025').all(10);
```

#### Render Colors

Pass the colors list to the ColorList component.

In the ColorList component, iterate over the list of colors and render each one in a SingleColor component. Fix the key problem by providing a unique id for each color.

In the SingleColor component, display the hex value and weight (percent) of each color, and use inline CSS to set the background color of the component.

#### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
```

App.jsx

```js
import { ToastContainer, toast } from 'react-toastify';

toast.success('awesome');
toast.error('error message');

return (
  <main>
    ...............
    <ToastContainer position='top-center' />
  </main>
);
```

#### Create Color

In the App component, create logic to generate a new list of colors when the user submits a new color value. Use react-toastify to display an error message if the values.js library cannot generate a color, and also display a toast message if the user tries to submit an empty value.

#### Clipboard

In the SingleColor component, set up a click handler that saves the hex value of the color to the browser clipboard.

To save some value in the navigator clipboard, you can use the Clipboard API, which is a part of the Web API provided by modern browsers. The Clipboard API allows web developers to interact with the user's clipboard, including reading and writing data to it.

Here is an example of how to save a string value to the clipboard using the Clipboard API:

```js
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
}

const textToCopy = 'Hello, world!';
copyToClipboard(textToCopy);
```

The flow of the application should look something like this:

- Create the Form, ColorList, and SingleColor components.

- In the App component, render the Form and ColorList components.

- In the Form component, set up a color state value and a form with an input field. Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.

- Install the values.js library and use it to generate a list of colors in the App component. Pass the colors list to the ColorList component.

- In the ColorList component, iterate over the list of colors and render each one in a SingleColor component. Fix the key problem by providing a unique id for each color.

- In the SingleColor component, display the hex value and weight (percent) of each color, and use inline CSS to set the background color of the component.

- Import and set up the react-toastify library. In the App component, create logic to generate a new list of colors when the user submits a new color value. Use react-toastify to display an error message if the values.js library cannot generate a color, and also display a toast message if the user tries to submit an empty value.

- In the SingleColor component, set up a click handler that saves the hex value of the color to the browser clipboard.

#### CSS

```css
.colors {
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}
```

min-height: calc(100vh - 160px); - This line sets the minimum height of the element. It uses the calc() function to subtract 160 pixels from the viewport height (100vh). The viewport height unit (vh) is relative to the height of the browser window. This means the element will take up at least the full viewport height minus 160 pixels.

display: grid; - This line sets the element's display property to 'grid', enabling the use of the CSS Grid Layout module to arrange its child elements in a grid format.

grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr)); - This line defines the number of columns and their width in the grid. The repeat() function is used with the auto-fit keyword, which automatically calculates the number of columns based on the container's width and the minimum and maximum column widths specified in minmax(223.33px, 1fr). The minimum width is set to 223.33 pixels, while the maximum width is set to 1 fraction (1fr) of the available space.

grid-template-rows: repeat(auto-fit, minmax(96px, 1fr)); - This line defines the number of rows and their height in the grid, similar to the previous property. The repeat() function is used with the auto-fit keyword, and the minmax() function defines the minimum row height as 96 pixels and the maximum height as 1 fraction (1fr) of the available space.
