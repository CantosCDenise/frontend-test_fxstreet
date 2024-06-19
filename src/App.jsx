import { Route, Routes } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import MCLatest from "./Components/MCLatest";
import MCPopular from "./Components/MCPopular";
import Sidebar from "./Components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./Components/Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
  );
}

export default App;
