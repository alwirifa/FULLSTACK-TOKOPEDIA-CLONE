import axios from "axios";
import { UserContext } from "../context/userContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  // Periksa apakah userContext ada sebelum mengakses user
  if (!userContext) {
    throw new Error("Dashboard must be used within a UserContextProvider");
  }

  const { setUser } = userContext;

  const handleLogout = async () => {
    await axios.post('/logout');
    navigate('/');
    setUser(null);
  };


  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Logout