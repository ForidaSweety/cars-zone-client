import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

import img from '../../../assets/image/person1.jpg'

const NavBar = () => {
    
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navBarItem = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/alltoys">All Toys</Link> </li>
        <li> <Link to="/blogs">Blogs</Link> </li>
        <li><Link to="/mytoy">My Toy</Link></li>
            <li><Link to="/addtoy">Add Toy</Link></li>
        {user?.email ? <>
            
            <li><button onClick={handleLogOut}>Log out</button></li>
           <img className="h-10 w-10 rounded-full mr-4" src={img} />
        </>
            : <li> <Link to="/login">Login</Link> </li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <h1><span className="text-5xl text-orange-700 font-extrabold">CarsZone</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBarItem}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;