import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../data/api";
import { Button } from "../components/button";
import { Status } from "../components/status";
import { loadFromLocalStorage } from "../data/localstorage";
import platzhalter from "../assets/platzhalter.jpg";

export const Charaktere = () => {
  //Zustände
  const [chars, setChars] = useState([]); //State für Chars aus der API
  const [eigeneChars, setEigeneChars] = useState([]); //State für eigene Chars
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      //asynchrone Funktion zu Laden der Daten
      try {
        //Versuch Daten von der API zu laden
        const data = await fetchCharacters(page);
        //UseState der Charaktere setten
        setChars(data.results);
      } catch (error) {
        //falls ein Fehler auftaucht speichern im State
        setError(error.message);
      } finally {
        //Ladezustand beenden
        setLoading(false);
      }
    };
    //aufrufen der asynchronen Funktion für API call
    loadData();
    //useEffect wird ausgelöst wenn Page sich ändert
  }, [page]);

  //Eigene Chars aus dem localstorage holen
  useEffect(() => {
    const charsFromStorage = loadFromLocalStorage();
    setEigeneChars(charsFromStorage || []); //leere Liste falls nichts gespichert
  }, []);

  //Kombination aus eigenen und API chars zum zusammen anzeigen
  const alleChars = [...eigeneChars, ...chars];

  return (
    <div className="char-wrapper">
      <h2 className="char-title">Rick & Morty Charaktere</h2>

      {loading && <p className="char-loading">Lade Charaktere...</p>}
      {error && <p className="char-error">Fehler: {error}</p>}

      {!error &&
        !loading && ( //classNames durch ChatGPT erledigt um CSS zu stylen
          <div className="card-grid">
            {alleChars.map((char) => (
              <div className="card" key={char.id}>
                <img
                  className="card-img"
                  src={char.image || char.img || platzhalter} //Bild von API local oder Platzhalter
                  alt={char.name}
                />
                <div className="card-content">
                  <h3 className="card-title">{char.name}</h3>
                  <p>
                    Status:
                    <Status status={char.status} />
                  </p>
                  {/*Nur API Chars eigene haben diese Atribute nicht*/}
                  {char.species && (
                    <>
                      <p>
                        Art: {char.species} {char.type && `(${char.type})`}
                      </p>
                      <p>Geschlecht: {char.gender}</p>
                      <p>Herkunft: {char.origin.name}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      <Button
        text={"Nächste Seite"}
        onAnswerClick={() => setPage((prev) => prev + 1)}
      />
    </div>
  );
};
