import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Signup from "./pages/Register/register";
import Login from "./pages/Login/login";
import Homepage from './pages/Home/homepage';
import Dashboard from './pages/Dashboard/dashboard';
import Setting from "./pages/Setting/setting";
import Theme from "./components/Theme/theme.jsx";
import Flow from "./components/Flow/flow.jsx";
import Response from "./components/Response/response.jsx";
import WorkSpace from './pages/Workspace/workspace.jsx';

function App() {
  return (
    
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path='/setting' element={<Setting/>}/>
         <Route path = '/theme' element={<Theme/>} />
         <Route path = '/flow' element={<Flow/>} />
         <Route path = '/response' element={<Response/>} />
         <Route path = '/workspace' element={<WorkSpace/>} />
        
         
          
    
        
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
