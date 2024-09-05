import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <span className="header__site-title">Second Opinion</span>
      <nav className="header__nav">
        <li className="header__nav-link">About</li>
        <li className="header__nav-link">Contact</li>
      </nav>
    </header>
  );
}
