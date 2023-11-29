import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-blue-500">
            <ul className="flex justify-around">
                <li className="px-4 m-4 text-white hover:text-red-300 font-bold text-xl">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 m-4 text-white hover:text-red-300 font-bold text-xl">
                    <Link to="profile">Profile</Link>
                </li>
                <li className="px-4 m-4 text-white hover:text-red-300 font-bold text-xl">
                    <Link to="products">Products</Link>
                </li>
                <li className="px-4 m-4 text-white hover:text-red-300 font-bold text-xl">
                    <Link to="help">Help</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar