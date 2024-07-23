import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Signup from "./pages/Register/register";
import Login from "./pages/Login/login";
import Homepage from './pages/Home/homepage';
import Dashboard from './pages/Dashboard/dashboard';


function App() {
  return (
    
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         
        
         
          
    
        
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
