import Icons from "../../components/Icons";
import "./Artist.css";

const Artist = ({ onClickHandler }) => {
  const handleArtistClick = (artistName) => {
    onClickHandler(artistName);
  };

  return (
    <div className="artist-container">
      <Icons onClickHandler={() => handleArtistClick("BIBI")} 
        img="./images/bibi.png" />
      <Icons onClickHandler={() => handleArtistClick("V")} 
        img="./images/v.png" />
      <Icons onClickHandler={() => handleArtistClick("LE SSERAFIM")}
        img="./images/le-sserafim.png"
      />
      <Icons onClickHandler={() => handleArtistClick("(G)I-DLE")}
        img="./images/gidle.png"
      />
      <Icons onClickHandler={() => handleArtistClick("TAEYEON")}
        img="./images/taeyeon.png"
      />
      <Icons onClickHandler={() => handleArtistClick("WENDY")}
        img="./images/wendy.png"
      />
      <Icons onClickHandler={() => handleArtistClick("NewJeans")}
        img="./images/newjeans.png"
      />
      <Icons onClickHandler={() => handleArtistClick("TWICE")}
        img="./images/twice.png"
      />
      <Icons onClickHandler={() => handleArtistClick("IU")}
        img="./images/iu.png"
      />
      <Icons onClickHandler={() => handleArtistClick("IVE")}
        img="./images/ive.png"
      />
      <Icons onClickHandler={() => handleArtistClick("NMIXX")}
        img="./images/nmixx.png"
      /> 
    </div>
  );
};

export default Artist;


