import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {


    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div className='lg:pl-20 pl-10  lg:pr-20 pr-10 mb-10'>
            <div className='container mx-auto'>
                <div className="navbar bg-base-100 flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li tabIndex={0}>
                                    <Link to='/blog' className="justify-between">Blog</Link>
                                </li>

                                {
                                    user?.uid ?
                                        <>
                                            <li> <Link to='myreviews' >My reviews</Link></li>
                                            <li> <Link to='/addservice' >Add service</Link></li>
                                            <li><button onClick={handleLogOut} >Log out</button></li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link to='/login'>Login</Link></li>

                                            <li>
                                                <Link to='/register'><button >Register</button></Link>
                                            </li>
                                        </>
                                }

                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl"><span><img className='h-6 w-6 rounded-sm' src="https://i.ibb.co/0YwTWXS/camera.png" alt="" /></span> <span>Perfect PhotoGrapher</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <Link to='/blog' className="justify-between">Blog</Link>
                            </li>

                            {
                                user?.uid ?
                                    <>

                                        <li> <Link to='myreviews' >My reviews</Link></li>
                                        <li> <Link to='/addservice' >Add service</Link></li>
                                        <li><button onClick={handleLogOut} >Log out</button></li>


                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link to='/login'>Login</Link></li>

                                        <li>
                                            <Link to='/register' className='text-decoration-none  '><button>Register</button></Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;