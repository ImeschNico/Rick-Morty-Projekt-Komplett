import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="nav-bar-top">
      <Link to="/">Home</Link>
      <Link to="/chars">Charaktere</Link>
      <Link to="/game">Game</Link>
      <Link to="/favors">Favoriten</Link>
      <Link to="/impressum">Impressum</Link>
    </nav>
  );
};
