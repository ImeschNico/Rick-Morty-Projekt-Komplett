import React, { useEffect, useState } from "react";

import { Button } from "../components/button";
import { Status } from "../components/status";
import { fetchAllFavoriten } from "../data/api";
import { deleteFavorit } from "../data/api";
import platzhalter from "../assets/platzhalter.jpg";

export const Favoriten = () => {
  //Zustand der Fav liste
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    try {
      const data = await fetchAllFavoriten();
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const removeFav = async (char) => {
    try {
      await deleteFavorit(char.id);
      setFavorites((prev) => prev.filter((fav) => fav.id !== char.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">Deine Favoriten:</h2>

      <div className="card-grid">
        {favorites.map((char) => (
          <div className="card" key={char.id}>
            <img className="card-img" src={platzhalter} alt={char.name} />
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
