import React, { useEffect, useState } from "react";
import { loadFavoriteChar, saveFavoriteChar } from "../data/localstorage";
import { Button } from "../components/button";
import { Status } from "../components/status";

export const Favoriten = () => {
  //Zustand der Fav liste
  const [favorites, setFavorites] = useState([]);

  // useEffect Hook: Lädt die Favoriten einmal beim ersten Rendern aus dem LocalStorage
  useEffect(() => {
    const favs = loadFavoriteChar(); //Favs aus localstorage laden
    setFavorites(favs); //Zustand mit favs aktualisieren
  }, []); // Leeres Array sorgt dafür, dass es nur einmal beim Mount ausgeführt wird

  //Funktion zum entfernen der Chars
  const removeFav = (char) => {
    // Filtert den Charakter mit der passenden ID aus der Favoritenliste heraus
    const updatedFavorites = favorites.filter((fav) => fav.id !== char.id); //eine neue Liste ohne den Charakter, den du gerade löschen möchtest.
    setFavorites(updatedFavorites); //Zustand aktualisiert
    saveFavoriteChar(updatedFavorites); //speichern der aktualisierten Liste wieder in localstorage
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">Deine Favoriten:</h2>

      <div className="card-grid">
        {favorites.map((char) => (
          <div className="card" key={char.id}>
            <img className="card-img" src={char.image} alt={char.name} />
            <div className="card-content">
              <h3 className="card-title">{char.name}</h3>
              <p>
                Status:
                <Status status={char.status} />
              </p>
              <p>
                Art: {char.species} {char.type && `(${char.type})`}
              </p>
              <p>Geschlecht: {char.gender}</p>
              <p>Herkunft: {char.origin.name}</p>
            </div>
            <Button text={"Entfernen"} onAnswerClick={() => removeFav(char)} />
          </div>
        ))}
      </div>
    </div>
  );
};
