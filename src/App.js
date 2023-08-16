import Index from "./Components/Index/Index";
import Navbar from "./Components/Navbar";
import Form from "./Components/Student/Form";
import Login from "./Components/Admin/Login";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/adminLogin" element={<Login/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
