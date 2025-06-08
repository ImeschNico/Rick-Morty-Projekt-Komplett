import MyImage from "../assets/titelbild.png";

export const Start = () => {
  return (
    <div>
      <h2 className="start-titel">Willkommen zur Rick & Morty Collection</h2>
      <img src={MyImage} alt="titelbild"></img>
    </div>
  );
};
