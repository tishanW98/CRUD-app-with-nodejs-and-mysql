import "./App.css";
import Home from "./Home";
import Create from "./Create";
import View from "./View";
import Edit from "./Edit";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
