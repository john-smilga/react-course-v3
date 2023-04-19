## Figma URL

[Reviews](https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1)

## Steps

#### Explore Data

Navigate to data.js and take a look at the data structure

#### Import Reviews

First, import the reviews data into your project. This data should be an array of objects, with each object representing a person's review and containing properties such as name, job, image URL, and text.

#### Setup State Value (Index)

Then, set up a state value that controls which person from the list is displayed.

#### React Icons (Optional)

[Docs](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons --save
```

App.jsx

```js
import { FaBeer } from 'react-icons/fa';
const App = () => {
  return;
  <div>
    <h2>Reviews Starter</h2>;
    <FaBeer className='beer' />
  </div>;
};
```

#### Render First Person

To render the first person in the list, you can access the first item in the reviews array and use its properties to display the person's image (inline styles), name, job, and review text.

#### Prev and Next

To allow the user to cycle through the reviews, you can set up buttons to display the next and previous reviews in the list. You can do this by keeping track of the current index in the reviews array, and updating the index when the user clicks the next or previous button. You can then use the updated index to access the corresponding person's review from the reviews array.

#### Random

To allow the user to display a random person's review, you can set up a button with functionality to randomly select an index in the reviews array. You can then use the selected index to display the corresponding person's review.

#### Extra

The modulus operator in JavaScript is represented by the percent sign (%). It returns the remainder of a division operation between two numbers.

Overall, the flow of the application should look something like this:

- Import the reviews data into your project as an array of objects.
- Set up the reviews data as a state variable using the useState hook.
- Render the first person's review in the list using their image, name, job, and text properties.
- Set up buttons to display the next and previous reviews in the list. Keep track of the current index in the reviews array and update it when the user clicks the next or previous button.
- Set up a button to display a random person's review. This button should select a random index in the reviews array and use it to display the corresponding person's review.
