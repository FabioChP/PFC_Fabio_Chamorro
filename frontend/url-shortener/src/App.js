import {Routes, Route} from "react-router-dom";
import './App.css';
import Main from "./sites/main/main";
import PaginaPrincipal from "./sites/paginaPrincipal/paginaPrincipal";
import Login from "./sites/login/login";
import Registro from "./sites/registro/registro";
import Stats from "./sites/stats/stats"
import User from "./sites/user/user"
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/statistics" element={<Stats />} />
          <Route path="/user/:username" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
