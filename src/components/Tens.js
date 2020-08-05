import React from "react";
import Draggable, { DraggableCore } from "react-draggable";
import styles from "./Tens.module.scss";

const Tens = () => {
  var Arr = [];
  (function shapeTens() {
    for (let i = 0; i < 10; i++) {
      Arr.push(
        <div className={styles.each}>
          <img width={20} height={20} src='/unicorn.jpg' alt='&#10084;'></img>
        </div>
      );
    }
  })();
  return (
    <Draggable>
      <div className={styles.layout}>{Arr}</div>
    </Draggable>
  );
};

export default Tens;
