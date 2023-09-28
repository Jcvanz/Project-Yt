import { MainContainer } from "./App-styles";
import Home from "./pages/home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./pages/shorts/shorts";
import Subscribe from "./pages/subscribe/subscribe";
import Library from "./pages/library/index";
import { UserStorage } from "./contexts/UserContext";
import Login from "./pages/login/index";
import YourVideos from "./pages/yourVideos/yourvideos";
import SearchPage from "./pages/search/search";
import SignUp from './pages/signUp/signUp';
 
function App() {

  

  return (
    <BrowserRouter>
      <UserStorage>
        <div className="App">
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/library" element={<Library />} />
              <Route path="/login" element={<Login />} />
              <Route path="/yourvideos" element={<YourVideos />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </MainContainer>
        </div>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
