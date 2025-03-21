import { Suspense } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import DarkModeToggler from "../components/DarkModeToggler";

const Home = () => {
  const navigation = () => {
    return (
      <nav>
        <ul className="flex space-x-4">
          <li>
            <DarkModeToggler />
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout appbarRightContent={navigation()} transparentAppbar>
        <div>Home</div>
      </Layout>
    </Suspense>
  );
};

export default Home;
