import { Link } from "react-router";
import logo from "../assets/logo-200.png";

export const Home = () => {
  return (
    <section className="container flex flex-col mx-auto justify-center items-center min-h-screen ">
      <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
        <h1 className="mx-auto max-w-90">
          <img src={logo} alt="logo" className="pb-10"/>
        </h1>
        <Link
          to={"/private/declarations"}
          className="border border-cyan-700 text-cyan-500 px-5 py-4 rounded-md hover:bg-cyan-700 hover:text-white"
        >
          Declarations
        </Link>
      </article>
    </section>
  );
};
