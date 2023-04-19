## Figma URL

[Tabs](https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1)

## Steps

#### Fetch Data

In App.jsx, use the fetch API to get job information from an external API. Use the useEffect hook to make the API call when the component mounts. While the data is being fetched, set up a loading state that displays a message to the user.

#### State Value

Once the data has been fetched, store it in a state variable using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output.

#### JobInfo

Create a JobInfo component to display the first job in the list. Use object destructuring to extract the relevant data from the job object. Display the company, dates, title, and duties, using the Duties component to render the list of duties.

#### JobDuties

In the Duties component, iterate over the array of duties and render each item. If you want to use icons, you will need to install the react-icons library.

#### UUID Library

```sh
npm install uuid
```

```js
import { v4 as uuidv4 } from 'uuid';
```

Since the job data does not have an id, you can install the uuid library to generate unique ids for each job. Use these ids instead of the index to set the key prop for the JobInfo and Duties components.

#### BtnContainer

Set up a BtnContainer component and pass the jobs array, currentItem state variable, and setCurrentItem function down as props. In the BtnContainer component, create a button for each job in the jobs array,

#### CurrentItem

Create a currentItem state variable in App.jsx and set it to 0 initially. Pass this state variable down to the JobInfo component as a prop, and use it to display the current job.

#### SetCurrentItem

Attach the setCurrentItem function to each button.
When the user clicks a button, the setCurrentItem function should be called with the index of the selected job. This function should update the currentItem state variable, causing the JobInfo component to render the selected job.

Overall, the flow of the application should look something like this:

- In App.jsx, use the fetch API to get job information from an external API, set up a loading state, and display a message to the user while the data is being fetched.
- Once the data has been fetched, store it in a state variable using the useState hook.
- Create a JobInfo component to display the first job in the list, using object destructuring to extract the relevant data from the job object.
- Use the Duties component to render the list of duties for each job.
- Use the uuid library to generate unique ids for each job, and use these ids instead of the index to set the key prop for the JobInfo and Duties components.
- Create a currentItem state variable in App.jsx and pass it down to the JobInfo component as a prop, using it to display the current job.
- Set up a BtnContainer component and pass the jobs array, currentItem state variable, and setCurrentItem function down as props.
- In the BtnContainer component, create a button for each job in the jobs array, and attach the setCurrentItem function to each button to change the currentItem state variable and render the selected job.
