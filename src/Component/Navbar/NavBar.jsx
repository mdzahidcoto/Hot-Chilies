import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthProviderContext';
import logo from '../../Resources/LOGO.png';

const NavBar = ({user}) => {
    const {logOut} = UserAuth();
    // console.log(user);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleLogout = async () =>{
        try {
            await logOut();
            localStorage.clear()
        }
        catch(err) {
            console.log(err.message);
        }
    }

    return (
        <>
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 lg:py-3 bg-red-500">
            <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="/">
                  <div className='flex'>
                    <img className='h-6 w-6 rounded-full mr-1' src={logo}alt='' />
                    <p className='font-serif'>Hot Chilies</p>
                  </div>
                </Link>
                <button
                  className="text-white cursor-pointer text-sm leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}>
                    <span className='font-bold text-lg font-serif'>Menu</span>
                </button>
              </div>
              <div className={
                  "lg:flex flex-grow items-center" +
                  (navbarOpen ? " flex" : " hidden")}>

                {
                  user ? (
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="nav-item">
                        <Link
                          className="navbarLi"
                          to="/">
                            Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="navbarLi"
                          to="/cart">
                            Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="navbarLi"
                          to="/delivery">
                            Delivery
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                        className="navbarLi"
                        to="/logIn">
                            <button onClick={handleLogout}>
                                LogOut
                            </button>
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="nav-item">
                        <Link
                        className="navbarLi"
                        to="/logIn">
                        Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="navbarLi"
                          to="/signUp">
                            Sign up
                          </Link>
                      </li>
                    </ul>
                  )
                }
              </div>
            </div>
          </nav>
        </>
    );
};

export default NavBar;
