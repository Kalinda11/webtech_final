 
import { Link } from "react-router-dom";

const Landing = () => {

   
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-700 bg-opacity-70">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Hospital Management System</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the Hospital Management System. Your solution for managing patient data efficiently.
          </p>
<Link to="/login" className="px-6 py-3 text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition duration-300"> Login</Link>
        </div>
      </div>
    );
  };
  
  export default Landing;
  