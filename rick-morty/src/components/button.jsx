//Wiederverwendbarer Button erstellen
export const Button = ({
  text,
  onAnswerClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      className={`button ${className || ""}`}
      onClick={onAnswerClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
