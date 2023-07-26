import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Titlebar from "./components/Titlebar";
import { useEffect, useState } from "react";
import { type } from "@tauri-apps/api/os";
import { invoke } from "@tauri-apps/api";

function App() {
  const [OS, setOS] = useState("");

  const setOSType = async () => {
    const os = await type();
    setOS(os);
  };

  useEffect(() => {
    setOSType();
    invoke("close_splashscreen");
  });

  return (
    <div className="w-full bg-transparent">
      {OS === "Windows_NT" && <Titlebar />}
      <div className="h-[calc(100vh-34px)] flex bg-transparent">
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

''
