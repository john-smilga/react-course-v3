## Figma URL

[Grocery Bud](https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1)

## Steps

#### State Variable

In App.jsx, set up a state variable called items using the useState hook.

#### Form Component

Create a Form component that contains an input field and a submit button. When the user submits the form, the handleSubmit function is called.

In the handleSubmit function, prevent the default form submission behavior using event.preventDefault(). If the form is submitted with an empty value, log a message and return.

#### Add Item

If the form is submitted with a value, create a new item object that includes a name (taken from the form input), a completed property (default value false), and a unique id (generated using a library like uuid or nanoid).

Add the new item to the items state variable using the setItems function.

#### Render List

Create two new components: Items and SingleItem. In Items, iterate over the list of items and render each one in a SingleItem component. For now, only render the name of the item.

#### SingleItem

In SingleItem, set up a state variable called isChecked with a default value of the item's completed property. Render a checkbox and add inline styles to add or remove the text-decoration: line-through property based on the isChecked value. Set up functionality to toggle the isChecked state variable when the checkbox is clicked.

#### Remove Item

In App.jsx, create a removeItem function and pass it down to the SingleItem component. In SingleItem, add a button that, when clicked, removes the item from the list.

#### Local Storage

Set up local storage functionality to persist the list of items across page reloads.
More info below.

#### Global Edit

Instead of 'local' value, set completed 'globally' (in the list) and save result in the local storage.

#### React-Toastify

Implement the react-toastify library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

Overall, the flow of the application should look something like this:

- In App.jsx, set up a state variable called items using the useState hook.
- Create a Form component that contains an input field and a submit button, and set up the handleSubmit function to add new items to the list.
- Create two new components: Items and SingleItem, and use them to render the list of items.
- Set up local storage functionality to persist the list of items across page reloads.
- Implement the react-toastify library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

#### Local Storage

localStorage is a built-in object in web browsers that allows web applications to store key-value pairs locally within the user's browser.

To store data in localStorage, you can use the localStorage.setItem(key, value) method, where key is a unique identifier for the data being stored and value is the data you want to store. Note that the value parameter needs to be a string.

Here's an example of how to use localStorage.setItem():

```js
localStorage.setItem('username', 'John');
```

This code stores the string 'John' with the key 'username' in localStorage.

To retrieve data from localStorage, you can use the localStorage.getItem(key) method, where key is the unique identifier for the data you want to retrieve. This method returns the value associated with the key you pass in, as a string.

Here's an example of how to use localStorage.getItem() to retrieve the value of the 'username' key we set earlier:

```js
const username = localStorage.getItem('username');
console.log(username); // outputs 'John'
```

Note that localStorage can only store strings, so if you need to store objects or other data types, you'll need to convert them to strings first. One way to do this is to use JSON.stringify() to convert your data to a JSON string before storing it in localStorage, and then use JSON.parse() to convert it back to an object when you retrieve it.

For example:

```js
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.name); // outputs 'John'
console.log(storedUser.age); // outputs 30
console.log(storedUser.email); // outputs 'john@example.com'
```

In summary, localStorage allows you to store key-value pairs locally in the user's browser using localStorage.setItem() and retrieve those values using localStorage.getItem(). However, note that localStorage can only store strings, so you'll need to convert other data types to strings before storing them.
