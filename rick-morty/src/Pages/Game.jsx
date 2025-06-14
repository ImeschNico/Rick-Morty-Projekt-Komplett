import React, { useEffect, useState } from "react";
import { fetchRandomCharakter } from "../data/api";
import { Button } from "../components/button";
import { loadFavoriteChar, saveFavoriteChar } from "../data/localstorage";
import { Status } from "../components/status";

export const Game = () => {
  const [char, setChar] = useState(null); //State für den aktuell angezeigten Char
  const [loading, setLoading] = useState(true); //State für Ladestatus
  const [error, setError] = useState(null); //State für Error

  //Funktion um ein zufälligen Char zu Laden
  //async = asynchrone Operation nutzen. Dinge die noch nicht fertig sind
  const loadNewChar = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomCharakter(); //API aufrufen um Char zu laden
      setChar(data); //Char in data speichern
    } catch (error) {
      setError(error.message); //Wenn API nicht geht Fehler in State speichern
    } finally {
      setLoading(false);
    }
  };
  // useEffect Hook: Lädt einmal beim ersten Rendern einen Charakter
  useEffect(() => {
    loadNewChar();
  }, []);

  //Funktion einen Char als Fav zu speichern
  const addToFavorites = (character) => {
    //Favs aus localStorage laden
    const currentFavorites = loadFavoriteChar();

    //wird nur hinzugefügt wenn noch nicht vorhanden in Fav
    const isAlreadyFavorite = currentFavorites.some(
      (fav) => fav.id === character.id
    );

    //Wenn noch nicht in Favs in die Liste speicher
    if (!isAlreadyFavorite) {
      const updatedFavorites = [...currentFavorites, character];
      saveFavoriteChar(updatedFavorites);
      console.log(`${character.name} zu Favoriten hinzugefügt`);
    } else {
      console.log(`${character.name} ist bereits in Favortien`);
    }
  };

  //Funktion die aufgerufen wenn LIke oder Disslike
  const handleVote = (choice) => {
    console.log(`Du hast ${choice} für ${char.name} gewählt`);
    if (choice === "Like") {
      addToFavorites(char); //IN Favs speichern
    }
    loadNewChar(); //Immer neuen Char laden
  };

  return (
    <div className="char-wrapper">
      <h2 className="game-titel">Rick & Morty Game</h2>

      {loading && <p className="char-loading">Lade Charaktere...</p>}
      {error && <p className="char-error">Fehler: {error}</p>}

      {!error && !loading && (
        <div className="game-card" key={char.id}>
          <div className="card-image-wrapper">
            <Button
              text={"❌"}
              className="vote-button left"
              onAnswerClick={() => handleVote("Dislike")}
            />

            <img className="card-img" src={char.image} alt={char.name} />
            <Button
              text={"💖"}
              className="vote-button right"
              onAnswerClick={() => handleVote("Like")}
            />
          </div>

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
        </div>
      )}
    </div>
  );
};
