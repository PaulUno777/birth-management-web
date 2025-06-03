import { Link } from "react-router";
import logo from "../../assets/logo-200.png";
import { NAV_LINKS } from "../../utils/data";

export default function Nav() {
  return (
    <nav className="bg-slate-50 shadow-xl w-60 fixed top-0 left-0 bottom-0 flex flex-col justify-between z-10">
      <Link
        to={"private/declarations"}
        className="flex justify-center items-center p-4"
      >
        {" "}
        <img src={logo} alt="logo" className="max-w-50 " />{" "}
      </Link>
      <ul>
        {NAV_LINKS.map(({ to, label }, index) => (
          <li
            key={`nav-link-${index}`}
            className={`border-b border-gray-300 ${
              index == 0 ? "border-t" : ""
            }`}
          >
            <Link
              to={to}
              className="text-gray-700 py-3 pl-3 hover:bg-gray-300 hover:text-black block font-mono"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => null}
        className="bg-red-900 text-white py-2 font-normal hover:bg-red-950"
      >
        Logout
      </button>
    </nav>
  );
}
