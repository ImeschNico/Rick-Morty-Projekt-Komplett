import axios from "axios";

//Basis URL der API
export const BASE_URL = "https://rickandmortyapi.com/api";

//Holt eine Seite mit Char (max 20 pro Seite)
export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, {
      params: { page: page }, // Hier werden die Seiten als Abfrage Parameter übergeben
    });
    return response.data;
  } catch (error) {
    //Error Meldung erstellen wenn nicht geladen werden kann
    throw Error("Fehler beim Laden der Charaktere");
  }
};

//Holen eines random ID eines Char (ID Bereich=1-826)
export const fetchRandomCharakter = async () => {
  const randomId = Math.floor(Math.random() * 826) + 1; //Zufallszahl zwischen 1 und 826
  try {
    const response = await axios.get(`${BASE_URL}/character/${randomId}`); //Holt Char anhand der random ID
    return response.data; //Char zurückgeben
  } catch (error) {
    throw Error("Fehler beim Laden eines zufälligen Charakters");
  }
};
