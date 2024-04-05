import "./Favorites.css";

const Favorites = ({onClickHandler}) => {
  return (
    <div className="square-btn" onClick={onClickHandler}>
      <p className="large-text">❤️</p>
    </div>
  );
}

export default Favorites;