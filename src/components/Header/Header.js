import React from "react";
import "./styles.css";

export default function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>My Notes</h1>
      <button onClick={() => handleToggleDarkMode(
        (previousDarkMode) => !previousDarkMode
        )
        } 
        className="save"
        >
        Dark Mode☽  ☀︎
        </button>
    </div>
  )
}

