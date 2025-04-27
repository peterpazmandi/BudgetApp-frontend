import { Suspense } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import DarkModeToggler from "../components/DarkModeToggler";
import { LANDING_PAGE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../router/Routes";

const Home = () => {
  const navigation = () => {
    return (
      <nav>
        <ul className="flex space-x-4">
          <li>
            <DarkModeToggler />
          </li>
          <li>
            <Link to={LANDING_PAGE_ROUTE} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={LOGIN_ROUTE} className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to={REGISTER_ROUTE} className="hover:underline">
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
