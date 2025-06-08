import React from "react";

export const Impressum = () => {
  return (
    <div className="impressum-wrapper">
      <h2>Impressum</h2>
      <p>
        <strong>Verantwortlich für diese Webseite:</strong>
      </p>
      <p>Nico Imesch</p>
      <p>5432 Neuenhof</p>
      <p>Schweiz</p>

      <p>
        <strong>Kontakt:</strong>
      </p>
      <p>E-Mail:{"nico.imesch@outlook.com"}</p>
      <p>
        <strong>Hinweis:</strong>
      </p>
      <p>
        Diese Webseite dient ausschließlich der Präsentation meiner Arbeiten im
        Rahmen eines Schulprojekts. Es werden keine geschäftlichen Aktivitäten
        durchgeführt und keine personenbezogenen Daten gespeichert oder
        verarbeitet.
      </p>
    </div>
  );
};
