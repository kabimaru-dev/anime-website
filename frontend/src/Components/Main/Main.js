import AnimePopular from "../AnimePopular/AnimePopular";
import AnimeSelection from "../AnimeSelection/AnimeSelection";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Main.module.css";

function Main() {
  return (
    <div>
      <div className={`${styles.main}`}>
        <div className="background">
          <AnimePopular />
          <SearchBar />
          <AnimeSelection />
        </div>
      </div>
    </div>
  );
}

export default Main;
