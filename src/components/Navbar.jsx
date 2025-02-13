import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/nav.png";
import { AuthContext } from "../providers/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL, user?.displayName);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "News", path: "/news" },
    { name: "Resources", path: "/resources" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#1A1A1A] sticky top-0 z-50">
      <div className="w-11/12 mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-8" src={logo} alt="FutureTech Logo" />
            <h1 className="font-semibold text-white text-2xl">FutureTech</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg font-medium hover:text-gray-400 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Profile & Login/Logout Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {user && user?.email ? (
              <>
                <div className="relative group">
                  <img
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  <div className="absolute top-full mt-2 -left-12 bg-white shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-sm text-gray-700">{user?.displayName}</p>
                    <button
                      onClick={logOut}
                      className="text-red-500 hover:bg-gray-100 px-4 py-1 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button className="bg-[#FFD11A] px-5 py-3.5 rounded-lg cursor-pointer">
                <Link to={"/login"}>Login</Link>
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden relative">
            {isMenuOpen ? (
              <HiX
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiMenuAlt3
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-[#2A2A2A] rounded-lg shadow-lg py-3">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-5 py-3 text-white text-lg font-medium hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Profile & Login/Logout Button (Mobile) */}
                <div className="border-t border-gray-600 mt-2">
                  {user && user.email ? (
                    <>
                      <div className="flex items-center gap-2 px-5 py-3">
                        <div>
                          <img src={user?.photoURL} alt="" />
                        </div>
                        <span className="text-white text-lg">
                          {user?.displayName || "User"}
                        </span>
                      </div>
                      <button
                        className="block w-full text-left px-5 py-3 text-red-500 text-lg font-medium hover:bg-gray-700 transition-all duration-300"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-5 py-3 text-[#FFD11A] text-lg font-medium hover:bg-gray-700 transition-all duration-300"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
