import React,{ useState } from 'react';
import NavLinks from './NavLinks';


export const NavbarContext = createContext();


const Navbar = () => {

  const [user, setUser] = useState({ name: 'bob' });

  const logout = () => {
    setUser(null);
  };


  return (
    <NavbarContext.Provider value={{ user, logout }}>
      
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks />
      </nav>
      </NavbarContext.Provider>
  );

};
export default Navbar;
