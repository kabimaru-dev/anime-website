import AnimePopular from "../AnimePopular/AnimePopular";
import AnimeSelection from "../AnimeSelection/AnimeSelection";
import Background from "../Background/Background";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Main.module.css";

function Main() {
  return (
    <div>
      <div className={`${styles.main}`}>
        <AnimePopular />
        <SearchBar />
        <AnimeSelection />
        <Background />
      </div>
    </div>
  );
}

export default Main;
