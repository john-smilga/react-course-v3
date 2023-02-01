import { useContext } from 'react';
import { NavbarContext } from './Navbar';
import { useAppContext } from './Navbar';
const UserContainer = () => {
  const { user, logout } = useAppContext();
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
