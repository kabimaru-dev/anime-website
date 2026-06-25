import styles from "./Header.module.css";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.text}`}>
        <div className={`${styles.home}`}>
          <button>Home</button>
        </div>
        <div className={`${styles.top}`}>
          <button>Top</button>
        </div>
        <div className={`${styles.seasons}`}>
          <button>Seasons</button>
        </div>
        <div className={`${styles.manga}`}>
          <button>Manga</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
