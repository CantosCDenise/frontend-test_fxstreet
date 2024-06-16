import AppContainer from "./Components/AppContainer";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar"
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </AppContainer>  

  )
}

export default App
