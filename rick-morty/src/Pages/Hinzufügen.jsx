import React, { useEffect, useState } from "react";
import plarthalterimg from "../assets/platzhalter.jpg";
import { Button } from "../components/button";
import { Status } from "../components/status";
import { Formular } from "../components/formular";
import {
  fetchAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "../data/api";

export const Hinzufügen = () => {
  const [eigeneChars, setEigeneChars] = useState([]); //Liste eigener Chars
  const [editsId, setEditID] = useState(null); //ID des Chars der gerade bearbeitet wird
  const [formData, setFormData] = useState({}); //Formular
  // Daten für neue oder bearbeitete Chars verwdenen

  const [newCharFormData, setNewCharFormData] = useState({
    name: "",
    status: "",
    gender: "",
    origin: "",
    species: "",
    image: "",
  });

  const [editFormData, setEditFormData] = useState({});
  //Laden der gespeicherten Chars aus localsstorage
  useEffect(() => {
    const fetchChars = async () => {
      try {
        const chars = await fetchAllCharacters(); // API Call
        const eigene = chars
          .filter((c) => c.owner === "deineUserID")
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt)); // neueste zuerst;
        const vorgaben = chars.filter((c) => c.owner !== "deineUserID");
        setEigeneChars([...eigene, ...vorgaben]);
      } catch (error) {
        console.error("Fehler beim Laden der Charaktere:", error);
      }
    };

    fetchChars();
  }, []);

  //Funktion um char zu löschen
  const handleDelete = async (char) => {
    try {
      await deleteCharacter(char.id); // API Call
      setEigeneChars((prev) => prev.filter((c) => c.id !== char.id));
      // Optional: localStorage aktualisieren, wenn du das benutzt
      // localStorage.setItem("eigeneChars", JSON.stringify(updatedList));
    } catch (error) {
      console.error("Fehler beim Löschen des Charakters:", error);
    }
  };

  //Funktion um Chars zu editiern
  const startEdit = (char) => {
    setEditID(char.id);
    setEditFormData((prev) => ({
      ...prev,
      [char.id]: {
        name: char.name || "",
        status: char.status || "",
        gender: char.gender || "",
        origin: char.origin || "",
        species: char.species || "",
        image: char.image || "",
      },
    }));
  };

  //Funktion spiechert bearbeiteten Char
  const handleSave = async (id) => {
    try {
      const originalChar = eigeneChars.find((char) => char.id === id);
      const updatedData = editFormData[id];

      const completeData = {
        ...originalChar,
        ...updatedData,
      };

      const updatedChar = await updateCharacter(id, completeData);
      const updatedList = eigeneChars.map((char) =>
        char.id === id ? updatedChar : char
      );
      setEigeneChars(updatedList);
      setEditID(null);

      setEditFormData((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Charakters:", error);
    }
  };

  const handleAddchar = async () => {
    try {
      // Statt formData.name etc.:
      if (
        !newCharFormData.name.trim() ||
        !newCharFormData.status ||
        !newCharFormData.gender ||
        !newCharFormData.origin ||
        !newCharFormData.species
      ) {
        alert("Bitte alle Pflichtfelder ausfüllen");
        return;
      }

      const neuerCharakter = {
        name: newCharFormData.name.trim(),
        status: newCharFormData.status,
        gender: newCharFormData.gender,
        origin: newCharFormData.origin,
        species: newCharFormData.species,
        image: newCharFormData.image || "/src/assets/platzhalter.jpg",
      };

      const createdChar = await createCharacter(neuerCharakter);
      alert("Charakter erfolgreich erstellt!");
      setEigeneChars((prevChars) => [createdChar, ...prevChars]);

      // Formular zurücksetzen
      setNewCharFormData({
        name: "",
        status: "",
        gender: "",
        origin: "",
        species: "",
        image: "",
      });
    } catch (error) {
      console.error("Fehler beim Erstellen des Charakters:", error);
      alert("Charakter konnte nicht gespeichert werden.");
    }
  };

  //Formularänderungen aktualiseiren
  const handleChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id) {
      // Bearbeiten
      setEditFormData((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          [name]: value,
        },
      }));
    } else {
      // Neuer Charakter
      setNewCharFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">Bearbeitbare Charaktere:</h2>
      <Formular
        formData={formData}
        handleChange={handleChange}
        handleAddchar={handleAddchar}
      />
      <div className="card-grid">
        {eigeneChars.map((char) => (
          <div className="card" key={char.id}>
            <img
              className="card-img"
              src={char.image || plarthalterimg}
              alt={char.name}
            />
            <div className="card-content">
              {editsId === char.id ? (
                <>
                  <input
                    name="name"
                    value={editFormData[char.id]?.name || ""}
                    onChange={(e) => handleChange(e, char.id)}
                    placeholder="Name"
                  />
                  <select
                    name="status"
                    value={editFormData[char.id]?.status || ""}
                    onChange={(e) => handleChange(e, char.id)}
                  >
                    <option value="">-- Status wählen --</option>
                    <option value="Alive">Lebendig</option>
                    <option value="Dead">Tot</option>
                    <option value="Unknown">Unbekannt</option>
                  </select>
                  <select
                    name="gender"
                    value={editFormData[char.id]?.gender || ""}
                    onChange={(e) => handleChange(e, char.id)}
                  >
                    <option value="">-- Geschlecht wählen --</option>
                    <option value="männlich">Männlich</option>
                    <option value="weiblich">Weiblich</option>
                    <option value="geschlechtslos">Geschlechtslos</option>
                    <option value="unbekannt">Unbekannt</option>
                  </select>
                  <select
                    name="origin"
                    value={editFormData[char.id]?.origin || ""}
                    onChange={(e) => handleChange(e, char.id)}
                  >
                    <option value="">-- Herkunft wählen --</option>
                    <option value="erde (c-137)">Erde (C-137)</option>
                    <option value="erde (ersatz-dimension)">
                      Erde (Ersatz-Dimension)
                    </option>
                    <option value="zitadelle der ricks">
                      Zitadelle der Ricks
                    </option>
                    <option value="galaktisches föderationsgefängnis">
                      Galaktisches Föderationsgefängnis
                    </option>
                  </select>
                  <select
                    name="species"
                    value={editFormData[char.id]?.species || ""}
                    onChange={(e) => handleChange(e, char.id)}
                  >
                    <option value="">-- Spezies wählen --</option>
                    <option value="mensch">Mensch</option>
                    <option value="alien">Alien</option>
                    <option value="roboter">Roboter</option>
                    <option value="tier">Tier</option>
                    <option value="mutant">Mutant</option>
                  </select>
                  <input
                    name="image"
                    value={editFormData[char.id]?.image || ""}
                    onChange={(e) => handleChange(e, char.id)}
                    placeholder={plarthalterimg}
                  />
                </>
              ) : (
                <>
                  <h3 className="card-title">{char.name}</h3>
                  <p>
                    Status: <Status status={char.status} />
                  </p>
                  <p>Geschlecht: {char.gender || "Unbekannt"}</p>
                  <p>Herkunft: {char.origin || "Unbekannt"}</p>
                  <p>Spezies: {char.species || "Unbekannt"}</p>
                </>
              )}
            </div>
            {editsId === char.id ? (
              <Button
                text="Speichern"
                onAnswerClick={() => {
                  handleSave(char.id);
                }}
              />
            ) : (
              <Button
                text="Bearbeiten"
                onAnswerClick={() => {
                  startEdit(char);
                }}
              />
            )}
            <Button
              text="Löschen"
              onAnswerClick={() => {
                handleDelete(char);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
