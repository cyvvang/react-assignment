import "./Favorites.css";

const Favorites = ({onClickHandler}) => {
  //console.log("favorite clicked..");
  return (
    <div className="square-btn" onClick={onClickHandler}>
      <p className="large-text">❤️</p>
    </div>
  );
}

export default Favorites;