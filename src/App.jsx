import { Route, Routes } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import MCLatest from "./Components/MCLatest";
import MCPopular from "./Components/MCPopular";
import Sidebar from "./Components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
      <AppContainer>
        <GlobalStyles />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MCLatest />} />
          <Route path="/popular" element={<MCPopular />} />
        </Routes>
      </AppContainer>
  );
}

export default App;
