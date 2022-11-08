import './App.css';
import FearturedCars from './components/FeaturedCars/FeaturedCars';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header/>}>
                <Route index element={<FearturedCars/>} />
                <Route path="login" element={<Login/>} />
                <Route path="admin" element={<Admin/>} />
              </Route>
            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
