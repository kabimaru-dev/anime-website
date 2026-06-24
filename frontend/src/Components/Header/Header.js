import styles from "./Header.module.css";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.text}`}>
        <div className={`${styles.home}`}>Home</div>
        <div className={`${styles.top}`}>Top</div>
        <div className={`${styles.seasons}`}>Seasons</div>
        <div className={`${styles.manga}`}>Manga</div>
      </div>
    </div>
  );
}

export default Header;
