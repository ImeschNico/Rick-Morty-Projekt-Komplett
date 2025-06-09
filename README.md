# React-Projektarbeit-Rick-Morty-Game-
Ein interaktives Charakter-Game mit Favoritenfunktion, inspiriert vom Rick &amp; Morty Universum

# Projektübersicht

Dieses React-Projekt ist eine interaktive Webapp, in welcher Fans der Kultserie «Rick & Morty» einen Überblick auf alle Charaktere der Serie haben, ein interaktives Spiel, um ihre Lieblingscharaktere auszuwählen und eine Auflistung ihrer Favoriten bietet. Ziel war es React-Komponenten, Routing, CRUD-Funktionalitäten und die Anbindung an externe APIs praxisnah anzuwenden.

---

## Anforderungskatalog

### Technologien & Tools:
• React: Für den Aufbau der Benutzeroberfläche mit wiederverwendbaren Komponenten  
• React Router: Für die Navigation und das Routing zwischen den Seiten (Home, Charaktere, Game, Favoriten, Impressum)  
• CSS: Für das Styling der Anwendung und der Navigation (Abstand, Fixierung, Buttons hervorheben)  
• Fetch API / REST API: Um Daten von der Rick & Morty API abzurufen und anzuzeigen  
• Git & GitHub: Versionskontrolle und Hosting des Projekts im Repository  
• Visual Studio Code: Entwicklungsumgebung für Coding, Testing und Git-Integration  
• Excalidraw: Für Storyboard und Scribble  

---

## User Stories:

### User Story 1:  
Als Benutzer der Rick & Morty App, will ich einen Überblick über alle Rick & Morty Charaktere haben, um zu sehen, ob sie noch am Leben sind.  
**Akzeptanzkriterien:**  
- Die Daten werden richtig von der Rick & Morty API geladen.  
- Jede Charakterkarte zeigt Name, Bild und Status (lebendig/tot/unbekannt).  
- Der Nutzer kann durch die Liste scrollen oder durch Seiten blättern.
  
**Definition of Done:**  
- Alle Akzeptanzkriterien wurden erfüllt.  
- Der Code wurde überprüft.  
- Die Funktion ist in der finalen Version enthalten.

---

### User Story 2:  
Als Fan der Serie Rick & Morty, will ich spielerisch meine Lieblingscharaktere als Favoriten speichern, damit ich sie schneller wiederfinde.  
**Akzeptanzkriterien:**  
- Unter dem Punkt Game kann man Charaktere als Favorit hinzufügen.  
- Ein Klick fügt den Charakter hinzu oder entfernt ihn.  
- Die Favoriten werden im local storage gespeichert.  
- Eine Seite nur mit zeigt alle favorisierten Charaktere an.
  
**Definition of Done:**  
- Alle Akzeptanzkriterien sind erfüllt  
- Der Code wurde überprüft.  
- Die Funktion ist in der finalen Version verfügbar

---

### User Story 3:  
Als Nutzer will ich, einfach zwischen den Seiten navigieren können, damit ich die App intuitiv nutzen kann.  
**Akzeptanzkriterien:**  
- Eine Navigationsgeräte oder ein Header ist auf allen Seiten zu sehen  
- Ein Klick auf Charaktere zeigt sie Seite mit den Charakteren  
- Ein Klick auf Game zeigt die Seite mit dem Spiel  
- Ein Klick auf Favoriten zeigt alle Favoriten
  
**Definition of Done:**  
- Alle Akzeptanzkriterien wurden erfüllt  
- Der Code wurde überprüft  
- Die Navigation ist in der finalen Version vorhanden

---

## Funktionale Kernaufgaben:
• Darstellung von Charakterdaten aus einer externen API  
• Navigation zwischen verschiedenen Screens (Routing)  
• CRUD-Funktionalität für Favoriten (Hinzufügen und Entfernen von Lieblingscharakteren)  
• Fehlerhandling und Validierung bei Benutzereingaben (z.B. bei Favoritenverwaltung)  
• Anzeige eines Impressums als statische Informationsseite


## Klassendiagramme:

### Klassendiagramm Pages:

![Klassendiagramm-Pages](rick-morty/public/docs/images/Klassendiagramm-Pages.png)
