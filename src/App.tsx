import { FullBodyElement } from "./Components/FullBodyElement.js";
import { Header } from "./Components/Header.js";
import { DropdownMenuStateProvider } from "./Components/Providers/DropdownMenuStateProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <DropdownMenuStateProvider>
        <FullBodyElement>
          <Header />
        </FullBodyElement>
      </DropdownMenuStateProvider>
    </>
  );
}

export default App;
