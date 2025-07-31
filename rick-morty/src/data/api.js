// api.js

const BASE_URL = "http://localhost:8080/api/characters"; // Backend-URL

export async function fetchAllCharacters() {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) throw new Error("Fehler beim Laden der Charaktere");
  return response.json();
}

export async function fetchRandomCharakter() {
  const response = await fetch(`${BASE_URL}/random`);
  if (!response.ok)
    throw new Error("Fehler beim Laden des zufälligen Charakters");
  return response.json();
}

export async function fetchCharacterById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Charakter nicht gefunden");
  return response.json();
}

export async function createCharacter(characterDTO) {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(characterDTO),
  });
  if (!response.ok) throw new Error("Fehler beim Erstellen des Charakters");
  return response.json();
}

export async function updateCharacter(id, characterDTO) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(characterDTO),
  });
  if (!response.ok) throw new Error("Fehler beim Aktualisieren des Charakters");
  return response.json();
}

export async function deleteCharacter(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Fehler beim Löschen des Charakters");
  return true;
}

//---------------------------------------------
//Favoriten URL
const FAVORITEN_URL = `${BASE_URL}/favoriten`;

export async function fetchAllFavoriten() {
  const response = await fetch(FAVORITEN_URL);
  if (!response.ok) throw new Error("Fehler beim Laden der Favoriten");
  return response.json();
}

export async function createFavorit(favoritDTO) {
  const response = await fetch(FAVORITEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favoritDTO),
  });
  if (!response.ok) throw new Error("Fehler beim Erstellen des Favoriten");
  return response.json();
}

export async function deleteFavorit(id) {
  const response = await fetch(`${FAVORITEN_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Fehler beim Löschen des Favoriten");
  return true;
}

const loadFavoriteChar = async () => {
  try {
    const favoriten = await fetchAllFavoriten(); // <- API-Aufruf
    console.log("Favoriten geladen:", favoriten);
    setFavoriten(favoriten);
  } catch (error) {
    console.error("Fehler beim Laden der Favoriten:", error);
  }
};

export async function saveFavoritChar(favoritDTO) {
  const response = await fetch(FAVORITEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favoritDTO),
  });
  if (!response.ok) throw new Error("Fehler beim Erstellen des Favoriten");
  return await response.json();
}
