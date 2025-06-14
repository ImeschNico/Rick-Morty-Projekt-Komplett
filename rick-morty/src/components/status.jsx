export const Status = ({ status }) => {
  const getEmoji = () => {
    switch (
      status //Checck welcher Status aktiv ist
    ) {
      case "Alive":
        return "🟢";
      case "Dead":
        return "🔴";
      default:
        return "⚪️";
    }
  };

  return (
    <span>
      {getEmoji()} {status}
    </span>
  );
};
