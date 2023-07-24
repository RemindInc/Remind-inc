import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="h-screen flex">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
