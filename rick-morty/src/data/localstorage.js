const FAVORITES_KEY = "favoriteChar"; //Schlüssel für Favoriten
const STORAGE_KEY = "myChars"; //Schlüssel für eigene Cahraktere

// Favoriten speichern
export const saveFavoriteChar = (favorites) => {
  try {
    // JavaScript-Array zu JSON-String konvertieren
    const jsonString = JSON.stringify(favorites);
    //JSON string speichern unter dem festen KEY
    localStorage.setItem(FAVORITES_KEY, jsonString);
    //Console log zur kontrolle
    console.log("Favoriten gespeichert:", favorites.length);
  } catch (error) {
    console.error("Fehler beim Speichern:", error);
  }
};

// Favoriten laden
export const loadFavoriteChar = () => {
  try {
    // JSON-String aus localStorage holen
    const jsonString = localStorage.getItem(FAVORITES_KEY);

    // Wenn nichts gespeichert, leeres Array zurückgeben
    if (!jsonString) return [];
    // JSON-String zurück zu JavaScript-Array konvertieren
    const favorites = JSON.parse(jsonString);
    console.log("Favoriten gespeichert");
    return favorites;
  } catch (error) {
    console.error("Fehler beim Laden:", error);
    return []; // Bei Fehler leeres Array zurückgeben
  }
};

// Eine einzelne Favorite löschen
export const deleteFavoriteChar = (charId) => {
  try {
    // Alle Favoriten laden
    const favorites = loadFavoriteChar();

    // Alle ausser der zu löschenden Frage behalten
    const filtered = favorites.filter((f) => f.id !== charId);

    // Gefilterte Liste wieder speichern
    saveFavoriteChar(filtered);

    return filtered;
  } catch (error) {
    console.error("Fehler beim Löschen:", error);
    return loadFavoriteChar(); // Bei Fehler ursprüngliche Liste zurückgeben
  }
};

//Eigene Charaktere hinzufügen
export const saveToLocalStorage = (data) => {
  //Daten eigener Chars in ein JSON String umwandeln und speichern
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

//Eigene Chars aus localStorage laden
export const loadFromLocalStorage = () => {
  //Gespeicherste JSON string abrfuen
  const data = localStorage.getItem(STORAGE_KEY);
  //Wenn Daten vorhanden zurück un ein Array umwadneln sonst leeres array
  return data ? JSON.parse(data) : [];
};
