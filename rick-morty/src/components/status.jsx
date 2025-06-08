export const Status = ({ status }) => {
  const getEmoji = () => {
    switch (status) {
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
