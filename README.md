# Rick-Morty-Projekt-Komplett

Dieses Repository verbindet das Backend [Spring-Boot-Backend](https://github.com/ImeschNico/Spring-Boot-Backend) mit dem Frontend [Projektarbeit „Rick & Morty Game“](https://github.com/ImeschNico/React-Projektarbeit-Rick-Morty-Game).  
Da das ursprüngliche Frontend ausschliesslich mit LocalStorage gearbeitet hat, wurde es angepasst, um mit dem Backend kommunizieren zu können.

---

## Projektübersicht

- **Frontend**: Angepasste Version, die jetzt über HTTP-Requests mit dem Backend kommuniziert.
- **Backend**: Extern gepflegt und **nicht** in dieses Repository eingebunden. Link: [Spring-Boot-Backend](https://github.com/ImeschNico/Spring-Boot-Backend)
- **Ziel**: Ein lauffähiges Gesamtprojekt, bei dem das Frontend dynamisch Daten vom Backend abruft und verarbeitet.

---

## Technologien

- React (Frontend)
- Vite (Build-Tool / Dev-Server)
- Java (Backend)
- IDEs: VS Code (Frontend), IntelliJ (Backend)
- Ports: Frontend (z.B. 5173), Backend (z.B. 8080)

---

## Anpassungen am Frontend

Um das Frontend mit dem Backend lauffähig zu machen, mussten folgende Punkte überarbeitet werden, da das ursprüngliche Frontend stark auf LocalStorage setzte:

1. **API-Endpunkte konfigurieren**  
   Die URLs der Backend-API müssen korrekt gesetzt sein (z. B. http://localhost:8080/api/characters/favoriten).

2. **HTTP-Requests mit Fehlerbehandlung**  

3. **Datenformat abstimmen**  
   Das Frontend sendet und erwartet JSON im passenden Format (z. B. characterId, userId).

4. **State Management und UI-Updates**  
   UI-Komponenten reagieren nun auf Backend-Daten und Änderungen.

5. **Cross-Origin Resource Sharing (CORS)**  
   Das Backend muss CORS erlauben, wenn FE und BE auf unterschiedlichen Ports/Domains laufen.

6. **Optimistic Locking / Backend-Konflikte beachten**  
   Konflikte bei Datenaktualisierungen wurden berücksichtigt.

---

## Installation & Startanleitung

### Backend starten

1. Backend-Repository klonen:
```bash
   git clone https://github.com/ImeschNico/Spring-Boot-Backend.git
```

2. Backend in IntelliJ öffnen und starten (Standard-Port 8080).

Detaillierterer Installationsguide im Repository [Spring-Boot-Backend](https://github.com/ImeschNico/Spring-Boot-Backend)

### Frontend starten

3. Frontend klonen:
```bash
   git clone https://github.com/ImeschNico/Rick-Morty-Projekt-Komplett.git
```

4. Frontend starten
In das Frontend-Verzeichnis wechseln:
```bash
   cd .\rick-morty\
```

5. Abhängigkeiten installieren:
```bash
   npm install
```

6. Frontend starten:
```bash
   npm run dev
```

---

## Tests, Feedback & Learnings

Tests, Reflexionen und persönliche Learnings findest du in den jeweiligen Einzelprojekten:

- **Frontend-Repository**: [React-Projektarbeit-Rick-Morty-Game](https://github.com/ImeschNico/React-Projektarbeit-Rick-Morty-Game)
- **Backend-Repository**: [Spring-Boot-Backend](https://github.com/ImeschNico/Spring-Boot-Backend)

Dieses Repository dient lediglich der Verbindung beider Komponenten zu einem lauffähigen Gesamtprojekt.
