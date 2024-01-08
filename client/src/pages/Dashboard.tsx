import { UserContext } from "../context/userContext";
import { useContext } from "react";
import ProductDashboard from "./productDashboard";
import Logout from "../components/Logout";

const Dashboard = () => {
  const userContext = useContext(UserContext);

  // Periksa apakah userContext ada sebelum mengakses user
  if (!userContext) {
    throw new Error("Dashboard must be used within a UserContextProvider");
  }

  const { ready, user } = userContext;

  if (!ready) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <p>loading</p>
      </div>
    );
  }

  // Handle the case where user might be null
  if (!user) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <p>No user found.</p>
        {/* You can add a button or link to navigate to login or handle this case */}
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user.name}</h2>
      <ProductDashboard />
      <Logout />
    </div>
  );
};

export default Dashboard;
