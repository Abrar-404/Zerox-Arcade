import { Link, NavLink, useNavigate } from 'react-router-dom';
import img from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const naviGate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        naviGate('/');
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navs = (
    <>
      <li className="text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? null : (
        <>
          <li className="text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="text-white">
            <NavLink to="/hackathons">Hackathons</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar  bg-transparent shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content t mt-3 z-[1] p-2 shadow bg-gray-900 bg-opacity-60 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <Link to="/">
            <img className="max-w-[150px] max-h-[80px]" src={img} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navs}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn text-base mb-2 btn-sm btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-circle border-none text-xs text-white bg-[#5616C5]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
