import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import MainContent from "./Components/MainContent";
import MCPopular from "./Components/MCPopular";
import Sidebar from "./Components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
      <AppContainer>
        <GlobalStyles />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/popular" element={<MCPopular />} />
        </Routes>
      </AppContainer>
  );
}

export default App;
