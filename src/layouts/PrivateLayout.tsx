import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <section className="border border-red-200">
      <h1>PrivateLayout</h1>
      <Outlet />
    </section>
  );
};

export default PrivateLayout;
