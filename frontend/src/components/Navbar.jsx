import { LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
import { updateSearch } from "../features/filter/filterSlice";
import Input from "./ui/Input";
const Navbar = () => {
  const state = useSelector((state) => state.filter);
  const { email } = useSelector((state) => state.user);
  const [search, setSearch] = useState(state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    dispatch(updateSearch(e.target.value));
    navigate("/");
  };

  const handleLogOut = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  let links = (
    <>
      <Link to="auth" className="navLinks" onClick={handleLogOut}>
        <LogIn /> Login
      </Link>
    </>
  );
  if (email) {
    links = (
      <>
        <Link className="navLinks" onClick={handleLogOut}>
          <LogOut /> Logout
        </Link>
      </>
    );
  }
  return (
    <>
      <nav className="bg-slate-950 text-white">
        <div className="container mx-auto px-2 py-4">
          <div className="lg:flex justify-between items-center text-center lg:text-start">
            <h4 className="text-2xl font-semibold">
              <Link to="/">Gallery App</Link>
            </h4>
            {/* Search Bar */}
            <div className="max-w-[600px] w-full mx-auto py-4 lg:py-0">
              <Input
                type="text"
                placeholder="Search For Image"
                value={search}
                onChange={handleOnChange}
              />
            </div>
            <ul className="flex justify-center lg:justify-start gap-4 text-gray-400">
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
