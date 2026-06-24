import AnimePopular from "./AnimePopular";
import AnimeSelection from "./AnimeSelection";
import Background from "./Background";
import SearchBar from "./SearchBar";

function Main() {
  return (
    <div>
      <div className="main">
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
