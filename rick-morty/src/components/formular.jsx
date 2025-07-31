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

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">-- Geschlecht wählen (optional) --</option>
        <option value="männlich">Männlich</option>
        <option value="weiblich">Weiblich</option>
        <option value="geschlechtslos">Geschlechtslos</option>
        <option value="unbekannt">Unbekannt</option>
        {/* Falls "egal" gewünscht, dann z.B. geschlechtslos oder unbekannt verwenden */}
      </select>

      <select name="origin" value={formData.origin} onChange={handleChange}>
        <option value="">Herkunft wählen</option>
        <option value="erde (c-137)">Erde (C-137)</option>
        <option value="erde (ersatz-dimension)">Erde (Ersatz-Dimension)</option>
        <option value="zitadelle der ricks">Zitadelle der Ricks</option>
        <option value="galaktisches föderationsgefängnis">
          Galaktisches Föderationsgefängnis
        </option>
      </select>

      <select name="species" value={formData.species} onChange={handleChange}>
        <option value="">Spezies wählen</option>
        <option value="mensch">Mensch</option>
        <option value="alien">Alien</option>
        <option value="roboter">Roboter</option>
        <option value="tier">Tier</option>
        <option value="mutant">Mutant</option>
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
