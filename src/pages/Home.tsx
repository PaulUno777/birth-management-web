import { Link } from "react-router";

export const Home = () => {
  return (
    <section className="container flex flex-col mx-auto justify-center items-center min-h-screen">
      <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
        <h1 className="text-3xl mb-6">Birth Management</h1>
        <Link
          to={"/private/declarations"}
          className="border border-blue-600 text-blue-400 px-5 py-4 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Declarations
        </Link>
      </article>
    </section>
  );
};
