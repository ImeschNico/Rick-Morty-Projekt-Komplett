import React, { useEffect, useState } from "react";
import { loadFavoriteChar, saveFavoriteChar } from "../data/localstorage";
import { Button } from "../components/button";
import { Status } from "../components/status";

export const Favoriten = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = loadFavoriteChar();
    setFavorites(favs);
  }, []);

  const removeFav = (char) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== char.id);
    setFavorites(updatedFavorites);
    saveFavoriteChar(updatedFavorites);
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
