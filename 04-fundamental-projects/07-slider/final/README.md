## Figma URL

[Slider](https://www.figma.com/file/QfMzzThSYmgabSvn4t8Yfe/Slider?node-id=0%3A1&t=IpsYjMUn3Xj3Hs3N-1)

## Steps

#### Explore Data

Explore arrays in data.js

#### Import Data and Set State Value

Create Carousel.jsx, import all arrays from data.js and set up state value using the useState hook, use shortList as default value (for now).

#### Setup Container and Prev/Next Buttons

In the return statement, set up a container element to hold all the slides. Inside the container, iterate over the people state value to create each slide.

Set up prev and next buttons outside the container element. You can use the onClick event to trigger functions that will change the current slide.

#### Setup CSS

Use CSS to style the container and slides. Set the container to position:relative and the slides and prev/next buttons to position:absolute. You can also set the width and height of the container and slides to control their size.

Switch default value in people state value. Set it equal to list or longList

#### Main Logic

To move the slides back and forth, use the transform property with a translateX value. For example, to move the slides to the left, you can use the transform:translateX(-100%) property however to move the slides to the right, you can use the transform:translateX(100%) property. For the active slide we will use transform:translateX(0)

#### Current Person

Create a currentPerson state value in App.jsx and set it to 0 initially. This will allow you to keep track of the current slide being displayed.

#### Prev and Next

Implement the prev and next functionality using the setCurrentPerson function to update the currentPerson state value.

#### Auto Slide

Implement the auto slide functionality using the setInterval function to change the currentPerson state value at regular intervals.

#### Extra - React Slick Library

[React Slick Docs](https://react-slick.neostack.com/)

```sh
npm install react-slick slick-carousel --save
```

Overall, the flow of the application should look something like this:

- In App.jsx, import the people array from data.js and set it up as a state value using the useState hook.
- In the return statement, set up a container element to hold all the slides, and iterate over the people state value to create each slide.
- Set up prev and next buttons and style the container,slides and buttons.
- Uncomment the rest of the items in the people array.
- Create a currentPerson state value in App.jsx and set it to initially.
- Implement the prev and next functionality using the setCurrentPerson function to update the currentPerson state value and move the slides back and forth using the transform property with a translateX value.
- Implement the auto slide functionality using the setInterval function to change the currentPerson state value at regular intervals.
