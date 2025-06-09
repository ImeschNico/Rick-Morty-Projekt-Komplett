import { Navigation } from "./navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="app">
      <header className="App-header">
        <Navigation />
        <h1>Rick & Morty Collection</h1>
      </header>

      <main className="layout-main-content">
        <Outlet /> {/*Platzhalter aus React Router*/}
      </main>

      <footer className="layout-footer">
        <p>© Rick&Morty Collection. All rights reserved</p>
        <p>Made with ❤️ by Nico Imesch</p>
      </footer>
    </div>
  );
};
