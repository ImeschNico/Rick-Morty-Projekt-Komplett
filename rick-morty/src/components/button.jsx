//Wiederverwendbarer Button erstellen
export const Button = ({
  text, //Text der angezeigt werden sollte im Button
  onAnswerClick, //Funktion beim Klicken ausführen
  disabled = false,
  className,
}) => {
  return (
    <button
      className={`button ${className || ""}`} //Basisklasse oder optionale zusätzliche Klassen
      onClick={onAnswerClick} //Klick Handler
      disabled={disabled} //Button deaktivieren, wenn true ist
    >
      {text}
    </button>
  );
};
