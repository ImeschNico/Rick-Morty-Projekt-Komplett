import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import { Start } from "./Pages/Start";
import { Charaktere } from "./Pages/Charaktere";
import { Game } from "./Pages/Game";
import { Favoriten } from "./Pages/Favoriten";
import { Impressum } from "./Pages/Impressum";
import { PageNotFound } from "./Pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="/chars" element={<Charaktere />} />
        <Route path="/game" element={<Game />} />
        <Route path="/favors" element={<Favoriten />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
