import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";
import userAvatar from "../assets/user-admin-avatar.png";

const PrivateLayout = () => {
  return (
    <section className="border-4 border-red-400 min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-4">
        <header className="flex justify-between my-3 h-10 ">
          <h3 className="text-2xl text-cyan-900 font-semibold">Declarations</h3>
          <div>
            <div className="flex justify-center items-center gap-2">
              <img
                src={userAvatar}
                alt="Avatar"
                className="flex  max-w-10 rounded-4xl bg-gray-800 border-1"
              />
              User name
            </div>
          </div>
        </header>
        <Outlet />
      </main>
    </section>
  );
};

export default PrivateLayout;
