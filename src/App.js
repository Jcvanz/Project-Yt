import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import { useState } from 'react';
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import { UserStorage } from "./contexts/UserContext";
import Login from "./pages/login";

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu openMenu={openMenu}/>
            <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', justifyContent: 'center'}}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;