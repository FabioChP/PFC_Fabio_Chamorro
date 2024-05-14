import {Routes, Route} from "react-router-dom";
import './App.css';
import Main from "./sites/main/main";
import PaginaPrincipal from "./sites/paginaPrincipal/paginaPrincipal";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<PaginaPrincipal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
