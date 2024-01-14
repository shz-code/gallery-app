import { Link } from "react-router-dom";
import Input from "./ui/Input";
const Navbar = () => {
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
              <Input type="text" placeholder="Search For Image" />
            </div>
            <ul className="flex justify-center lg:justify-start gap-4 text-gray-400">
              <Link className="hover:text-white">Logout</Link>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};

export default Navbar;
