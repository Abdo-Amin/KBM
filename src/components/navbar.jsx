
import logoImage from "../assets/logo.svg";

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <div className="topbar">
      <div className="logo">
        <img src={logoImage} alt="Logo"/>
      </div>
      <button className="theme-btn" onClick={onToggleTheme}>
        {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
