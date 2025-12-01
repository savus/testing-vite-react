import { Header } from "./Components/Header.js";
import { ActiveLinkProvider } from "./Components/Providers/ActiveLinkProvider.js";
import { DropdownMenuStateProvider } from "./Components/Providers/DropdownMenuStateProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <ActiveLinkProvider>
        <DropdownMenuStateProvider>
          <Header />
        </DropdownMenuStateProvider>
      </ActiveLinkProvider>
    </>
  );
}

export default App;
