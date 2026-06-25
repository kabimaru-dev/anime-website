import AnimePopular from "../AnimePopular/AnimePopular";
import AnimeSelection from "../AnimeSelection/AnimeSelection";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Main.module.css";
import img1 from "../../images/background.png";

function Main() {
  return (
    <div>
      <div className={`${styles.main}`}>
        <AnimePopular />
        <SearchBar />
        <AnimeSelection />
        <img className={`${styles.cover.narrow}`} src={img1} alt="background" />
      </div>
    </div>
  );
}

export default Main;
