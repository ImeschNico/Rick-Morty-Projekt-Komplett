import React from "react";
import placeholder from "../assets/platzhalter.jpg";
import { Button } from "./button";

//Zeigt das Formular an sich an
//Alles was in Formualr gespeichert wird übergeben wir formData
export const Formular = ({ formData, handleChange, handleAddchar }) => {
  return (
    <div className="form">
      <h3>Neuen Charakter erstellen</h3>
      <input
        name="name" //Name des Feldes wichtig für handleChange
        placeholder="Name" //Platzhalter text im Eingabefeld
        value={formData.name} //Aktueller WErt aus dem formDataUse State
        onChange={handleChange} //Handler für Änderungen
      />

      <select
        name="status" //Name des Fledes
        value={formData.status} //Aktueller Status
        onChange={handleChange} //Handler für Änderungen
      >
        {/*Werte für dei Auswahl des Status*/}
        <option value="">-- Status wählen --</option>{" "}
        <option value="Alive">Lebendig</option>
        <option value="Dead">Tot</option>
        <option value="Unknown">Unbekannt</option>
      </select>

      <input
        name="image" //Name des Feldes
        placeholder={placeholder} //PLatzhalter Bild
        value={formData.image}
        onChange={handleChange}
      />
      <Button text="Hinzufügen" onAnswerClick={handleAddchar} />
    </div>
  );
};
