import styles from "./Background.module.css";
import img1 from "../../images/background.png";

function Background() {
  return (
    <img className={`${styles.cover.narrow}`} src={img1} alt="background" />
  );
}

export default Background;
