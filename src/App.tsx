import { Header } from "./Components/Header.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <Header />
      </NavbarContextProvider>
    </>
  );
}

export default App;
