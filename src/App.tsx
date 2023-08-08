import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Titlebar from "./components/Titlebar";
import { useEffect, useState } from "react";
import { type } from "@tauri-apps/api/os";
import { invoke } from "@tauri-apps/api";
import { OpenExplorerContext } from "./context/OpenExplorerContext";

function App() {
  const [OS, setOS] = useState("");
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const setOSType = async () => {
    const os = await type();
    setOS(os);
  };

  useEffect(() => {
    setOSType();
    invoke("close_splashscreen");
  }, []);

  return (
    <div className="w-full bg-transparent">
      {OS === "Windows_NT" && <Titlebar />}
      <div className="flex bg-transparent h-[calc(100vh-25px)]">
        <OpenExplorerContext.Provider
          value={{ isExplorerOpen, setIsExplorerOpen }}
        >
          <Menu />
          <Outlet />
        </OpenExplorerContext.Provider>
      </div>
    </div>
  );
}

export default App;

("");
