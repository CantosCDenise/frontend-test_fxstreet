import { Route, Routes } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import MainContent from "./Components/MainContent";
import MCPopular from "./Components/MCPopular"
import Sidebar from "./Components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
