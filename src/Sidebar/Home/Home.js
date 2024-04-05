import "./Home.css";

const Home = ({onClickHandler}) => {
  return (
    <div className="square-btn" onClick={onClickHandler}>
      <p className="large-text">🏡</p>
    </div>
  );
}

export default Home;