import "../css/header.css";
import type { TDropdownMenu } from "../types";
import { Navbar } from "./Navbar";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <Navbar />
    </header>
  );
};
