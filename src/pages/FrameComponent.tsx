import { FunctionComponent } from "react";
import CursorIcon from "../components/CursorIcon";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.cursorParent}>
      <img className={styles.cursorIcon} alt="" src="/cursor.svg" />
      <div className={styles.rectangleWrapper}>
        <CursorIcon />
      </div>
    </div>
  );
};

export default FrameComponent;
