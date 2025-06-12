import React from "react";
import placeholder from "../assets/platzhalter.jpg";
import { Button } from "./button";

//Zeigt das Formular an sich an
export const Formular = ({ formData, handleChange, handleAddchar }) => {
  return (
    <div className="form">
      <h3>Neuen Charakter erstellen</h3>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="">-- Status wählen --</option>
        <option value="Alive">Lebendig</option>
        <option value="Dead">Tot</option>
        <option value="Unknown">Unbekannt</option>
      </select>

      <input
        name="image"
        placeholder={placeholder}
        value={formData.image}
        onChange={handleChange}
      />
      <Button text="Hinzufügen" onAnswerClick={handleAddchar} />
    </div>
  );
};
