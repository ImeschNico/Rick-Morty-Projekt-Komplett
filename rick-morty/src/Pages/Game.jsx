import React, { useEffect, useState } from "react";
import { fetchRandomCharakter } from "../data/api";
import { Button } from "../components/button";
import { Status } from "../components/status";
import { fetchAllFavoriten } from "../data/api";
import { saveFavoritChar } from "../data/api";
import platzhalter from "../assets/platzhalter.jpg";

export const Game = () => {
  const [char, setChar] = useState(null); //State für den aktuell angezeigten Char
  const [loading, setLoading] = useState(true); //State für Ladestatus
  const [error, setError] = useState(null); //State für Error
  const [favoriten, setFavoriten] = useState([]);

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
  const addToFavorites = async (character) => {
    try {
      const currentFavorites = await fetchAllFavoriten();

      const isAlreadyFavorite = currentFavorites.some(
        (fav) => fav.charakterId === character.id
      );

      if (!isAlreadyFavorite) {
        const dto = {
          charakterId: character.id,
          name: character.name,
          status: character.status,
          image: character.image ?? "", // fallback auf leeren String
          species: character.species,
          gender: character.gender,
          origin: character.origin?.name || "Unbekannt", // ✅ String statt Objekt!
        };

        console.log("DTO wird gesendet:", dto); // Debug!
        await saveFavoritChar(dto);
        console.log(`${character.name} zu Favoriten hinzugefügt`);
      } else {
        console.log(`${character.name} ist bereits in Favoriten`);
      }
    } catch (error) {
      console.error("Fehler beim Hinzufügen zu Favoriten:", error);
    }
  };

  const loadFavoriteChar = async () => {
    const data = await fetchAllFavoriten();
    setFavoriten(data);
  };

  //Funktion die aufgerufen wenn LIke oder Disslike
  const handleVote = async (choice) => {
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

            <img className="card-img" src={platzhalter} alt={char.name} />
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
            <p>Herkunft: {char.origin}</p>
          </div>
        </div>
      )}
    </div>
  );
};
