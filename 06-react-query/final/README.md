## Steps

#### Server

Open server directory.

- run "npm install" and "npm start"

#### Node Course

[Node Tutorial and Projects Course](https://www.udemy.com/course/nodejs-tutorial-and-projects-course/?referralCode=E94792BEAE9ADD204BC7)

#### Starter

- run "npm install" and "npm run dev"
- Grocery Bud structure

#### Explore Setup

Explore files and folders

#### Custom Axios Instance

Create utils.js and setup custom axios instance with
following base url:'http://localhost:5000/api/tasks'

#### HTTP Methods

HTTP (Hypertext Transfer Protocol) methods define the types of actions that can be performed on a web server to retrieve, modify or delete information. The most commonly used HTTP methods are GET, POST, PATCH and DELETE. GET retrieves data, POST sends data to be processed, PATCH update or replace existing data, DELETE removes data.

- can use fetch()

GET: This HTTP method is used to retrieve data from a server. When a client sends a GET request to a server, the server will return a response that includes the requested data. This method is typically used to retrieve information from a database, to read a web page, or to download a file. The HTTP GET method is the default method used by web browsers to retrieve data from a server, as it is a safe and efficient way to request resources.

```js
// HTTP GET example
try {
  const response = await axios.get('/api/data');
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

```js
// HTTP GET example
axios
  .get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

POST: The POST method is used to send data to a server to create or update a resource. When a client sends a POST request to a server, the server will process the request and create a new resource or update an existing one. This method is commonly used in web forms, where users enter information that is then sent to a server for processing.

```js
// HTTP POST example
try {
  const response = await axios.post('/api/data', { name: 'John', age: 30 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

PATCH: This method is similar to the POST method, but it is used to update only a part of a resource. When a client sends a PATCH request to a server, the server will update the resource with the new data provided in the request. This method is commonly used in REST APIs to update specific properties of a resource.

```js
// HTTP PATCH example
try {
  const response = await axios.patch('/api/data/1', { age: 31 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

DELETE: The DELETE method is used to remove a resource from a server. When a client sends a DELETE request to a server, the server will delete the resource if it exists. This method is commonly used in REST APIs to remove a resource that is no longer needed or to undo a previous action.

```js
// HTTP DELETE example
try {
  const response = await axios.delete('/api/data/1');
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

CRUD stands for Create, Read, Update, and Delete, which are the basic operations that can be performed on a database or web application. These operations allow users to create new data, read existing data, update data, and delete data when necessary.

#### Docs

[Task API Docs](https://documenter.getpostman.com/view/18152321/2s93RTSDLn)

#### UseEffect Approach

```js
const fetchTasks = async () => {
  try {
    const response = await customFetch.get('/');
    console.log(response.data);
  } catch (error) {
    +console.error(error);
  }
};

useEffect(() => {
  fetchTasks();
}, []);
```

#### React Query

React Query is a state management library that simplifies the process of fetching, caching, and updating data in React applications. Its major benefits include automatic background refetching, caching and stale data management, error handling, and easy pagination and infinite scrolling. Compared to setting up requests with useEffect, React Query provides a more declarative and centralized approach to managing data in React, which results in cleaner and more efficient code. It also reduces boilerplate code and improves performance by minimizing unnecessary re-renders and network requests.

- tons of features
- versions

[React Query](https://tanstack.com/query/v4/docs/react/overview)

#### Install

```sh
npm i @tanstack/react-query
```

#### Setup React Query

main.jsx

```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

#### First Query

Items.jsx

```js
import { useQuery } from '@tanstack/react-query';

const result = useQuery({
  queryKey: ['tasks'],
  queryFn: () => customFetch.get('/'),
});
console.log(result);
```

- Query Key

The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

- Query Function

A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.

#### Error Handling

```js
const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/something');
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: '1rem ' }}>there was an error...</p>;
  // }
  if (error) {
    return <p style={{ marginTop: '1rem ' }}>{error.message}</p>;
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
```

#### Thunder Client Extension

Test API endpoints directly in VS CODE

#### Test Create Task (Challenge)

- check the docs and test endpoint in Thunder Client

#### Create Task

Form.jsx

```js
const { mutate: createTask, isLoading } = useMutation({
  mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
});

const handleSubmit = (e) => {
  e.preventDefault();
  createTask(newItemName);
};
```

#### useMutation Helper Options

useMutation comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle. These come in handy for both invalidating and refetching queries after mutations

```js
const { mutate: createTask, isLoading } = useMutation({
  mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
  onSuccess: () => {
    // do something
  },
  onError: () => {
    // do something
  },
});
```

#### Edit Task (Challenge)

- check the docs and test endpoint in Thunder Client
- setup the functionality
  hints : Item.jsx, look for edit log, and two arguments in mutationFn

#### Delete Task (Challenge)

- check the docs and test endpoint in Thunder Client
- setup the functionality
