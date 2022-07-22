import { useState } from "react";
import Login from "./Login";

const Admin = () => {
  const [userData, setUserData] = useState();
  if (!userData) return <Login />;

  return <div>Admin</div>;
};

export default Admin;
