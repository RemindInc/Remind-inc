import React, { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import { Icons } from "./Icons";
import {
  VscChromeClose,
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
} from "react-icons/vsc";
import '../index.css'

const Titlebar: React.FC = () => {
  const [winState, setWinState] = useState("maximized");

  const handleClose = () => {
    appWindow.close();
  };

  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximizeRestore = () => {
    if (winState === "maximized") {
      appWindow.unmaximize();
      setWinState("restored");
    } else {
      appWindow.maximize();
      setWinState("maximized");
    }
  };

  return (
    <div className="w-full flex items-center justify-between bg-zinc-900 border-b border-b-zinc-800">
      <div className="flex items-center my-1">
        <Icons.Logo className="h-6"/>
      </div>
      <div className="flex justify-end">
        <button onClick={handleMinimize} className="hover:bg-zinc-800">
          <VscChromeMinimize className="w-10 h-6 p-1.5 text-white" />
        </button>
        <button
          onClick={handleMaximizeRestore}
          className="hover:bg-zinc-800"
        >
          {winState === "maximized" ? (
            <VscChromeRestore className="w-10 h-6 p-1.5 text-white" />
          ) : (
            <VscChromeMaximize className="w-10 h-6 p-1.5 text-white" />
          )}
        </button>
        <button onClick={handleClose} className="hover:bg-red-600">
          <VscChromeClose className="w-10 h-6 p-1.5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
