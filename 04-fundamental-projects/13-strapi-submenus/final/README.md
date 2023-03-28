## Steps

#### Data and Global Context

Explore the data.jsx file. Set up a global context with an isSidebarOpen state value (boolean) and two functions: one to close and the other to open the sidebar. Make all of these values available in the application.

#### Components

Create four components: Navbar, Hero, Sidebar, and Submenu.

#### Navbar

In the Navbar, for now, set up a logo (h3) and a button to open the sidebar. Grab the openSidebar function from the global context. Optionally, you can install and set up an icon from react-icons in the toggle button. Add CSS for the Navbar.

#### Hero

Set up a Hero component and add CSS.

#### Sidebar

In the Sidebar component, import sublinks from data.jsx, iterate over the list, and display links in the component. Set up the Sidebar CSS. Use the isSidebarOpen and closeSidebar functions from the global context to show/hide the sidebar.

#### NavLinks

Set up NavLinks in the Navbar. Import sublinks from data and iterate over them to render pages on the screen. Set up a NavLink CSS.

#### Submenu

Set up a Submenu component with some general CSS. In the global context, set up a pageId with a default value of null and make it available in the app. In the NavLinks component, once the user moves the mouse over the link, set the pageId with the specific page ID. In the Submenu component, grab the pageId from the global context. Based on that ID, get the specific page from sublinks and render the page and links in the submenu. Add CSS to the Submenu component.

#### Edge Cases

Fix multiple edge cases.

The flow of the application should look something like this:

- Explore the data.jsx file. Set up a global context with an isSidebarOpen state value (boolean) and two functions: one to close and the other to open the sidebar. Make all of these values available in the application.

- Create four components: Navbar, Hero, Sidebar, and Submenu.

- In the Navbar, for now, set up a logo (h3) and a button to open the sidebar. Grab the openSidebar function from the global context. Optionally, you can install and set up an icon from react-icons in the toggle button. Add CSS for the Navbar.

- Set up a Hero component and add CSS.

- In the Sidebar component, import sublinks from data.jsx, iterate over the list, and display links in the component. Set up the Sidebar CSS. Use the isSidebarOpen and closeSidebar functions from the global context to show/hide the sidebar.

- Set up NavLinks in the Navbar. Import sublinks from data and iterate over them to render pages on the screen. Set up a NavLink CSS.

- Set up a Submenu component with some general CSS. In the global context, set up a pageId with a default value of null and make it available in the app. In the NavLinks component, once the user moves the mouse over the link, set the pageId with the specific page ID. In the Submenu component, grab the pageId from the global context. Based on that ID, get the specific page from sublinks and render the page and links in the submenu. Add CSS to the Submenu component.

- Fix multiple edge cases.

#### CSS

```css
body {
  background: var(--primary-500);
}
/* 
============= 
Nav
=============== 
*/
nav {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-center {
  width: var(--fluid-width);
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
}

.logo {
  text-transform: none;
  color: var(--white);
  letter-spacing: 2px;
  font-weight: 700;
}
.toggle-btn {
  width: 2rem;
  height: 2rem;
  background: var(--white);
  color: var(--primary-700);
  border-radius: var(--borderRadius);
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
}
.toggle-btn:hover {
  transform: scale(1.05);
}

/* 
============= 
Hero
=============== 
*/
.hero-container {
  min-height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
}
.hero-center {
  color: var(--white);
  width: var(--fluid-width);
  max-width: var(--max-width);
}
.hero-center h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.25;
}
.hero-center p {
  line-height: 1.5rem;
}

@media screen and (min-width: 992px) {
  .hero-center {
    text-align: center;
  }
  .hero-center p {
    max-width: 35em;
    margin: 0 auto;
  }
  .toggle-btn {
    display: none;
  }
}

/* 
============= 
Sidebar
=============== 
*/

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  /* toggle stuff */
  opacity: 0;
  visibility: hidden;
}
/* toggle class */
.show-sidebar {
  opacity: 1;
  visibility: visible;
  transition-property: opacity;
  transition-duration: 1s;
}
.sidebar-container {
  padding: 4rem 2rem;
  position: relative;
}
.close-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.sidebar article {
  margin-bottom: 2rem;
}
.sidebar h4 {
  margin-bottom: 1rem;
  color: var(--primary-700);
}
.sidebar-sublinks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
}
.sidebar-sublinks a {
  display: block;
  color: var(--grey-900);
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.sidebar-sublinks svg {
  color: var(--grey-500);
}

@media screen and (min-width: 992px) {
  .sidebar {
    display: none;
  }
}

/* 
============= 
NavLinks
=============== 
*/

.nav-links {
  display: none;
}

@media screen and (min-width: 992px) {
  .nav-links {
    display: flex;
    justify-content: center;
    align-self: stretch;
    z-index: 1;
  }
  .nav-center {
    align-self: stretch;
    display: grid;
    grid-template-columns: auto 1fr;
    /* border: 2px solid red; */
  }
  .logo {
    align-self: center;
  }
  .nav-link {
    padding: 0 1rem;
    color: var(--white);
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    /* border: 2px solid green; */
  }
}

/* 
============= 
Submenu
=============== 
*/

.submenu {
  display: none;
}

@media screen and (min-width: 992px) {
  .submenu {
    display: block;
    position: fixed;
    top: 6rem;
    left: 50%;
    width: var(--fluid-width);
    max-width: var(--max-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    padding: 2rem;

    transform: rotateX(-90deg) translateX(-50%);
    transform-origin: top;
    perspective: 1000px;
    /* toggle stuff */
    visibility: hidden;
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    /* border: 2px solid red; */
  }
  .show-submenu {
    opacity: 1;
    visibility: visible;
    transform: rotateX(0deg) translate(-50%);
  }
  .submenu h5 {
    margin-bottom: 1rem;
    color: var(--primary-700);
  }
  .submenu-links {
    display: grid;
    row-gap: 0.5rem;
  }
  .submenu-links a {
    display: block;
    color: var(--grey-900);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .submenu-links svg {
    color: var(--grey-500);
  }
}
```

#### 3D Effect

These lines of CSS are used to apply a 3D transformation to an element on a webpage. Here's what each line does:

transform: rotateX(-90deg) translateX(-50%);
The transform property applies a transformation to an element. In this case, it applies two transformations: rotateX(-90deg) and translateX(-50%).

rotateX(-90deg) rotates the element around the X-axis by -90 degrees, which means it will appear to be flipped upside down.
translateX(-50%) moves the element horizontally by -50% of its own width, effectively shifting it to the left.
Together, these transformations make the element appear to be rotated and tilted, as if it's viewed from above and at an angle.

transform-origin: top;
The transform-origin property specifies the point around which the element should be rotated and transformed. In this case, it's set to top, which means the transformation should be applied around the top edge of the element.

perspective: 1000px;
The perspective property defines the distance between the viewer and the element, and affects the appearance of 3D transformations. In this case, it's set to 1000px, which means the element will appear to be tilted and rotated as if it's viewed from a distance of 1000 pixels.

Overall, these lines of CSS are used to create a 3D effect for an element, making it appear to be tilted and rotated in a particular way.

#### Mouse Events

onMouseEnter: This event is triggered when the mouse cursor enters the target element. It can be used to trigger an action when the user hovers over an element.

onMouseOver: This event is triggered when the mouse cursor is moved over the target element or any of its child elements. It can be used to track the mouse movement and trigger actions accordingly.

onMouseLeave: This event is triggered when the mouse cursor leaves the target element. It can be used to trigger an action when the user stops hovering over an element.
