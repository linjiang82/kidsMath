import React from "react";
import Draggable, { DraggableCore } from "react-draggable";
import styles from "./Ones.module.scss";

const Ones = () => {
  return (
    <div className={styles.each}>
      <img width={20} height={20} src='/unicorn.jpg' alt='&#10084;'></img>
    </div>
  );
};

export default Ones;
