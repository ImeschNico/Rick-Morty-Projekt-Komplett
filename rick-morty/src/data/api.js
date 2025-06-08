import axios from "axios";

export const BASE_URL = "https://rickandmortyapi.com/api";

//Holt eine Seite mit Char (max 20 pro Seite)
export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, {
      params: { page: page }, // Hier werden die Seiten als Abfrage Parameter übergeben
    });
    return response.data;
  } catch (error) {
    throw Error("Fehler beim Laden der Charaktere");
  }
};

export const fetchRandomCharakter = async () => {
  const randomId = Math.floor(Math.random() * 826) + 1;
  try {
    const response = await axios.get(`${BASE_URL}/character/${randomId}`);
    return response.data;
  } catch (error) {
    throw Error("Fehler beim Laden eines zufälligen Charakters");
  }
};
