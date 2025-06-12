import React, { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../data/localstorage";
import plarthalterimg from "../assets/platzhalter.jpg";
import { Button } from "../components/button";
import { Status } from "../components/status";
import { Formular } from "../components/formular";

export const Hinzufügen = () => {
  const [eigeneChars, setEigeneChars] = useState([]); //Liste eigener Chars
  const [editsId, setEditID] = useState(null); //ID des Chars der gerade bearbeitet wird
  const [formData, setFormData] = useState({ name: "", status: "", image: "" }); //Formular
  // Daten für neue oder bearbeitete Chars verwdener

  //Laden der gespeicherten Chars aus localsstorage
  useEffect(() => {
    const chars = loadFromLocalStorage();
    setEigeneChars(chars);
  }, []);

  //Funktion um char zu löschen
  const handleDelete = (char) => {
    const updatedList = eigeneChars.filter((c) => c.id !== char.id);
    setEigeneChars(updatedList);
    saveToLocalStorage(updatedList); //aktualiesierte Liste speichern
  };

  //Funktion um neuen Char zu erstellen
  const handleAddchar = () => {
    if (!formData.name.trim() || !formData.status) return; //validierung ob Formular gültig oder nicht

    const neuerChar = {
      id: Date.now(), //Einzigartige ID (jetziger Zeitpunkt)
      name: formData.name,
      status: formData.status,
      image: formData.image || plarthalterimg, //Falls kein Bild Platzhalter
    };

    const updatedList = [neuerChar, ...eigeneChars]; //neuer Char am Anfang der Liste
    setEigeneChars(updatedList);
    saveToLocalStorage(updatedList); //in localstorage speichern
    setFormData({ name: "", status: "", image: "" }); //Formular zurücksetzten
  };

  //Funktion um Chars zu editiern
  const startEdit = (char) => {
    setEditID(char.id); //Id vom zu bearbeitenden Char
    setFormData({
      name: char.name,
      status: char.status,
      image: char.image,
    });
  };

  //Funktion spiechert bearbeiteten Char
  const handleSave = (id) => {
    const updatedList = eigeneChars.map((char) => {
      return char.id === id ? { ...char, ...formData } : char;
    });
    setEigeneChars(updatedList);
    saveToLocalStorage(updatedList); //Änderung speichern
    setEditID(null); //bearbeitung beenden
  };

  //Formularänderungen aktualiseiren
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">Deine erstellten Charaktere:</h2>
      <Formular
        formData={formData}
        handleChange={handleChange}
        handleAddchar={handleAddchar}
      />
      <div className="char-grid">
        {eigeneChars.map((char) => (
          <div className="card" key={char.id}>
            <img
              className="card-img"
              src={char.image || plarthalterimg}
              alt={char.name}
            />
            <div className="card-content">
              {editsId === char.id ? ( //Logik um das Formular abzuspeichern
                <>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Alive">Lebendig</option>
                    <option value="Dead">Tot</option>
                    <option value="Unknown">Unbekannt</option>
                  </select>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder={plarthalterimg}
                  />
                </>
              ) : (
                <>
                  <h3 className="card-title">{char.name}</h3>
                  <p>
                    Status: <Status status={char.status} />
                  </p>
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
