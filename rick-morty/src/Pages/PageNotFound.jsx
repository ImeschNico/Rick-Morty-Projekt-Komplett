import notFoundImg from "../assets/NotFound.jpg";

export const PageNotFound = () => {
  return (
    <div>
      <h2 className="start-titel">404 Seite leider nicht gefunden</h2>
      <img src={notFoundImg} alt="nicht-gefunden-img"></img>
    </div>
  );
};
