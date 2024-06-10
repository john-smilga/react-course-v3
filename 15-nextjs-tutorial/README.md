## Node Version

The minimum Node.js version has been bumped from 16.14 to 18.17, since 16.x has reached end-of-life.

## Create Next App

```sh
npx create-next-app@latest appName
```

## Folder Structure

- app folder - where we will spend most of our time
  - setup routes, layouts, loading states, etc
- node_modules - project dependencies
- public - static assets
- .gitignore - sets which will be ignored by source control
- bunch of config files (will discuss as we go)
- in package.json look scripts
- 'npm run dev' to spin up the project on http://localhost:3000

```sh
npm run dev
```

- in globals.css remove everything after directives
- get a hold of the README.md

## Home Page

- page.tsx in the root of app folder
- represents root of our application
  '/' local domain or production domain
- react component (server component)
- bunch of css classes (will discuss Tailwind in few lectures)
- export component as default
- file name "page" has a special meaning
- snippets extension

  app/page.tsx

```tsx
const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
    </div>
  );
};
export default HomePage;
```

## Create Pages in Next.js

- in the app folder create a folder with the page.js file
  - about/page.js
  - contact/page.js
- can have .js .jsx .tsx extension

app/about/page.tsx

```tsx
const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
    </div>
  );
};
export default AboutPage;
```

## Link Component

- navigate around the project
- import Link from 'next/link'
  home page

```tsx
import Link from 'next/link';
const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>
        about page
      </Link>
    </div>
  );
};
export default HomePage;
```

## Nested Routes

- app/info/contact/page.tsx
- if no page.tsx in a segment will result in 404

```tsx
function ContactPage() {
  return <h1 className='text-7xl'>ContactPage</h1>;
}
export default ContactPage;
```

## CSS and Tailwind

- vanilla css in globals.css
- [Tailwind](https://tailwindcss.com/)

## Layouts and Templates

- layout.tsx
- template.tsx

  Layout is a component which wraps other pages and layouts. Allow to share UI. Even when the route changes, layout DOES NOT re-render. Can fetch data but can't pass it down to children. Templates are the same but they re-render.

- the top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
- any route segment can optionally define its own Layout. These layouts will be shared across all pages in that segment.
- layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.

```tsx
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <nav>hello there</nav>
        {children}
      </body>
    </html>
  );
}
```

## Challenge - Navbar

- create components/Navbar.tsx
- render in layout.tsx

```tsx
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4'>
      <Link href='/'>Home</Link>
      <Link href='/counter'>Counter</Link>
      <Link href='/tours'>Tours</Link>
      <Link href='/actions'>Actions</Link>
    </nav>
  );
}
export default Navbar;
```

```tsx
import Navbar from '@/components/Navbar';

return (
  <html lang='en'>
    <body className={inter.className}>
      <Navbar />
      <main className='max-w-3xl mx-auto py-10'>{children}</main>
    </body>
  </html>
);
```

## Fonts - Google Fonts

Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser.

```tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>hello there</nav>
        {children}
      </body>
    </html>
  );
}
```

## Metadata

Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.To define static metadata, export a Metadata object from a layout.tsx or page.tsx file.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};
```

## Server Components VS Client Components

- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

- BY DEFAULT, NEXT.JS USES SERVER COMPONENTS !!!!
- To use Client Components, you can add the React "use client" directive

### Server Components

Benefits :

- data fetching
- security
- caching
- bundle size

Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.
Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.

### Client Components

Benefits :

- Interactivity: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
- Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.

### Challenge

- create counter page and setup basic counter

```tsx
'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-bold'>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'
      >
        Increment
      </button>
    </div>
  );
}
export default Counter;
```

## Challenge - Refactor

- create Counter component and import in CounterPage
- now page can be server component

```tsx
import Counter from '@/components/Counter';

function CounterPage() {
  return (
    <section>
      <h1 className='text-6xl mb-16'>Page Content</h1>
      <Counter />
    </section>
  );
}
export default CounterPage;
```

## Fetch Data in Server Components

- create tours/page.tsx
- just add async and start using await 🚀🚀🚀
- the same for db
- Next.tsx extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics.

```tsx
const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);
  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours</h1>

      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>;
      })}
    </section>
  );
}
export default ToursPage;
```

## Refactor and Delay

- Refresh browser on another page, navigate to tours, observe delay.

```tsx
const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();
}
```

## Loading Component

The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.

- tours/loading.tsx

```tsx
'use client';
const loading = () => {
  return <span className='text-xl capitalize'>loading tours...</span>;
};
export default loading;
```

## Error Component

The error.tsx file convention allows you to gracefully handle unexpected runtime errors in nested routes.

- tours/error.js
- 'use client'

```js
'use client';
const error = () => {
  return <div>there was an error...</div>;
};
export default error;
```

## Nested Layouts

- create app/tours/layout.tsx
- UI will be applied to app/tours - segment
- don't forget about the "children"
- we can fetch data in the layout but...
  at the moment can't pass data down to children (pages) 😞

  layout.tsx

```js
function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className='py-2 w-1/2 bg-slate-500 rounded mb-4'>
        <h1 className='text-3xl text-white text-center'>Nested Layout</h1>
      </header>
      {children}
    </div>
  );
}
export default ToursLayout;
```

## Dynamic Routes

- app/tours/[id]/page.tsx

```js
const page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
    </div>
  );
};
export default page;
```

## Challenge - Setup Links

```tsx
return (
  <section>
    <h1 className='text-3xl mb-4'>Tours</h1>

    {data.map((tour) => {
      return (
        <Link
          key={tour.id}
          href={`/tours/${tour.id}`}
          className='hover:text-blue-500'
        >
          <h2>{tour.name}</h2>
        </Link>
      );
    })}
  </section>
);
```

## Next Image Component

- get random image from pexels site
  [Random Image](https://www.pexels.com/photo/assorted-map-pieces-2859169/)

The Next.js Image component extends the HTML <img> element with features for automatic image optimization:

- Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
- Visual Stability: Prevent layout shift automatically when images are loading.
- Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
- Asset Flexibility: On-demand image resizing, even for images stored on remote servers

- disable cache
- width and height

- priority property to prioritize the image for loading
  When true, the image will be considered high priority and preload.

```tsx
import mapsImg from '@/images/maps.jpg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const page = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
          />
          <h2>local image</h2>
        </div>
      </section>
    </div>
  );
};
export default page;
```

## Remote Images

- To use a remote image, the src property should be a URL string.

- Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually.

- The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file.

```tsx
import mapsImg from '@/images/maps.jpg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const page = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
          />
          <h2>local image</h2>
        </div>
        <div>
          <Image
            src={url}
            alt='tour'
            width={192}
            height={192}
            priority
            className='w-48 h-48 object-cover rounded'
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
};
export default page;
```

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.course-api.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
```

- To safely allow optimizing images, define a list of supported URL patterns in next.config.mjs. Be as specific as possible to prevent malicious usage.

- restart dev server

## Responsive Images

- The fill prop allows your image to be sized by its parent element
- sizes property helps the browser select the most appropriate image size to load based on the user's device and screen size, improving website performance and user experience.

A string that provides information about how wide the image will be at different breakpoints. The value of sizes will greatly affect performance for images using fill or which are styled to have a responsive size.

The sizes property serves two important purposes related to image performance:

First, the value of sizes is used by the browser to determine which size of the image to download, from next/image's automatically-generated source set. When the browser chooses, it does not yet know the size of the image on the page, so it selects an image that is the same size or larger than the viewport. The sizes property allows you to tell the browser that the image will actually be smaller than full screen. If you don't specify a sizes value in an image with the fill property, a default value of 100vw (full screen width) is used.

Second, the sizes property configures how next/image automatically generates an image source set. If no sizes value is present, a small source set is generated, suitable for a fixed-size image. If sizes is defined, a large source set is generated, suitable for a responsive image. If the sizes property includes sizes such as 50vw, which represent a percentage of the viewport width, then the source set is trimmed to not include any values which are too small to ever be necessary.

tours.tsx

```js
return (
  <div className='grid md:grid-cols-2 gap-8'>
    {data.map((tour) => {
      return (
        <Link
          key={tour.id}
          href={`/tours/${tour.id}`}
          className='hover:text-blue-500'
        >
          <div className='relative h-48 mb-2'>
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              sizes='33vw'
              // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
              priority
              className='object-cover rounded'
            />
          </div>
          <h2>{tour.name}</h2>
        </Link>
      );
    })}
  </div>
);
```

## More Routing

- Private Folders
  \_folder
- Route Groups
  (dashboard)
- Dynamic Routes

  - [...folder] - Catch-all route segment
  - [[...folder]] Optional catch-all route segment (used by Clerk)

- create test folder app/\_css
- create app/(dashboard)/auth

  - the url is just '/auth'

- create app/(dashboard)/auth/[sign-in]

```ts
const SignInPage = ({ params }: { params: { 'sign-in': string } }) => {
  console.log(params);
  return <div>SignInPage</div>;
};
export default SignInPage;
```

- create app/(dashboard)/auth/[...sign-in]
- create app/(dashboard)/auth/[[...sign-in]]

```ts
const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  console.log(params['sign-in'][1]);
  return <div>SignInPage :{params['sign-in'][1]}</div>;
};
export default SignInPage;
```

## Server Actions

- asynchronous server functions that can be called directly from your components.

- typical setup for server state mutations (create, update, delete)

  - endpoint on the server (api route on Next.js)
  - make request from the front-end
    - setup form, handle submission etc

- Next.js server actions allow you to mutate server state directly from within a React component by defining server-side logic alongside client-side interactions.

Rules :

- must be async
- add 'use server' in function body (only in RSC)
- can use in RCC but only as import

RSC - React Server Component
RCC - React Client Component

```tsx
export default function ServerComponent() {
  async function myAction(formData) {
    'use server';
    // access input values with formData
    // formData.get('name')
    // mutate data (server)
    // revalidate cache
  }

  return <form action={myAction}>...</form>;
}
```

- or setup in a separate file ('use server' at the top)
  - can use in both (RSC and RCC)

utils/actions.js

```tsx
'use server';

export async function myAction() {
  // ...
}
```

```tsx
'use client';

import { myAction } from './actions';

export default function ClientComponent() {
  return (
    <form action={myAction}>
      <button type='submit'>Add to Cart</button>
    </form>
  );
}
```

## Actions Page - Setup

- create Form and UsersList in components

```tsx
import Form from '@/components/Form';
import UsersList from '@/components/UsersList';

function ActionsPage() {
  return (
    <>
      <Form />
      <UsersList />
    </>
  );
}
export default ActionsPage;
```

## Form - Setup

```tsx
const createUser = async () => {
  'use server';
  console.log('creating user....');
};

function Form() {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className='text-2xl capitalize mb-4'>create user</h2>
      <input
        type='text'
        name='firstName'
        required
        className={inputStyle}
        defaultValue='peter'
      />
      <input
        type='text'
        name='lastName'
        required
        className={inputStyle}
        defaultValue='smith'
      />
      <button type='submit' className={btnStyle}>
        submit
      </button>
    </form>
  );
}
export default Form;

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';
```

## Actions File

- create utils/actions.ts
- make "Form" Client Component ('use client')
- import in Form

```ts
'use server';

export const createUser = async () => {
  console.log('creating user....');
};
```

```tsx
'use client';

import { createUser } from '@/utils/actions';
```

## FormData

```ts
export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  console.log({ firstName, lastName });
};
```

## Save User

- just as an example
- create "users.json" (root !!!)
- won't work on vercel (deployment)

```ts
'use server';

import { readFile, writeFile } from 'fs/promises';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};
```

## UsersList

```tsx
import { fetchUsers } from '@/utils/actions';
async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className='mt-4'>
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4 key={user.id} className='capitalize text-lg'>
              {user.firstName} {user.lastName}
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList;
```

## RevalidatePath

```ts
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createUser = async (formData: FormData) => {
  //...
  revalidatePath('/actions');
};
```

- if the data is displayed in a different page

```ts
export const createUser = async (formData: FormData) => {
  //...
  redirect('/');
};
```

- don't "redirect" place inside "try" block

```tsx
try {
  await saveUser(newUser);
  // will trigger error
  redirect('/');
} catch (error) {
  console.error(error);
}
```

## Pending State

- make sure Form is Client Component
- in createUser switch back to revalidatePath(/actions)

[React Docs - useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)

- useFormStatus()
- The useFormStatus Hook provides status information of the last form submission.

- The useFormStatus Hook must be called from a component that is rendered inside a <form>.
- useFormStatus will only return status information for a parent <form>.
  It will not return status information for any <form> rendered in that same component or children components.

  ```tsx
  import { useFormStatus, useFormState } from 'react-dom';

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button type='submit' className={btnStyle} disabled={pending}>
        {pending ? 'submitting...' : 'submit'}
      </button>
    );
  };
  ```

## Result

[React Docs - useFormState](https://react.dev/reference/react-dom/hooks/useFormState)

- useFormState()
- a Hook that allows you to update state based on the result of a form action.

```tsx
const [message, formAction] = useFormState(createUser, null);
return (
  <form action={formAction} className={formStyle}>
    {message && <p>{message}</p>}
    ...
  </form>
);
```

```ts
export const createUser = async (prevState: any, formData: FormData) => {
  // current state of the form
  console.log(prevState);

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath('/actions');
    // throw Error();
    return 'user created successfully...';
  } catch (error) {
    console.error(error);
    return 'failed to create user...';
  }
};
```

## Delete User

- create components/DeleteButton
- refactor UsersList

```tsx
function DeleteButton({ id }: { id: string }) {
  return (
    <form>
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
```

```tsx
import { fetchUsers } from '@/utils/actions';
import DeleteButton from './DeleteButton';
async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className='mt-4'>
      {users.length ? (
        <div className='max-w-lg'>
          {users.map((user) => (
            <h4
              key={user.id}
              className='capitalize text-lg flex justify-between items-center mb-2'
            >
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList;
```

## Delete Action

```ts
export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user: User) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
```

```tsx
import { deleteUser } from '@/utils/actions';

function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteUser}>
      <input type='hidden' name='id' value={id} />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
```

```tsx
import { deleteUser, removeUser } from '@/utils/actions';

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type='hidden' name='name' value='shakeAndBake' />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
```

## Bind Option

- An alternative to passing arguments as hidden input fields in the form (e.g. `<input type="hidden" name="userId" value={userId} />`) is to use the bind option. With this approach, the value is not part of the rendered HTML and will not be encoded.

- .bind works in both Server and Client Components. It also supports progressive enhancement.

```ts
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string;
  console.log(name);

  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
```

## Route Handlers

- install Thunder Client

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

- in app create folder "api"
- in there create folder "users" with route.ts file

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.

app/api/users/route.ts

```ts
// the following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

import { NextRequest, NextResponse } from 'next/server';
import { fetchUsers, saveUser } from '@/utils/actions';

export const GET = async () => {
  const users = await fetchUsers();
  return Response.json({ users });
};

export const POST = async (request: Request) => {
  const user = await request.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: 'user created' });
};
```

```ts
import { fetchUsers, saveUser } from '@/utils/actions';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);

  const users = await fetchUsers();
  return Response.json({ users });
};
```

```ts
import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return NextResponse.redirect(new URL('/', request.url));
};
```

The URL constructor takes two arguments: url and base. If the url is a relative URL, then base is required. If url is an absolute URL, then base is ignored.

Here, '/' is the url and request.url is the base.

This means it's creating a new URL object that represents the root of the URL contained in request.url.

For example, if request.url is 'http://example.com/path/to/resource', the new URL object would represent 'http://example.com/'.

## Middleware

[Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)

Middleware in Next.js is a piece of code that allows you to perform actions before a request is completed and modify the response accordingly.

- create middleware.ts in the root
- by default will be invoked for every route in your project

```ts
export function middleware(request) {
  return Response.json({ msg: 'hello there' });
}

export const config = {
  matcher: '/about',
};
```

```ts
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
```

## Local Build

- cleanup middleware
- fix css in UsersList.tsx
- remove all users from 'users.json'
- 'npm run build' followed by 'npm start'

## Caching

- [Vercel Video](https://www.youtube.com/watch?v=VBlSe8tvg4U)
- [Docs](https://nextjs.org/docs/app/building-your-application/caching)
