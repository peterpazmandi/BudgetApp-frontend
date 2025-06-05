import { useUserContext } from "../../contexts/UserContext";

const Overview = () => {
  const { user } = useUserContext();
  return <div>{user?.email}</div>;
};

export default Overview;
