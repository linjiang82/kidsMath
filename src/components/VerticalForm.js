import React, { useContext } from "react";
import styles from "./VerticalForm.module.scss";
import { DataContext } from "../context/dataContext";

const VerticalForm = () => {
  const { state, dispatch } = useContext(DataContext);
  const changeTens = (e) => {
    if (e.target.value >= 0 && e.target.value <= 9)
      dispatch({ type: "ChangeTens", value: e.target.value });
  };
  const changeOnes = (e) => {
    if (e.target.value >= 0 && e.target.value <= 9)
      dispatch({ type: "ChangeOnes", value: e.target.value });
  };
  return (
    <div className={styles.verticalForm}>
      <div className={styles.minuend}>
        <div className={styles.block}>
          <input
            type='number'
            min='0'
            max='9'
            maxLength={1}
            className={styles.input}
            defaultValue={0}
            value={state.tens}
            onChange={changeTens}></input>
        </div>
        <div className={styles.block}>
          <input
            type='number'
            min='0'
            max='9'
            maxLength={1}
            className={styles.input}
            defaultValue={0}
            value={state.ones}
            onChange={changeOnes}></input>
        </div>
      </div>
      <div className={styles.subtrahend}>
        <div className={styles.operator}>-</div>
        <div className={styles.block}>
          <input type='number' min='0' max='9' className={styles.input}></input>
        </div>
        <div className={styles.block}>
          <input type='number' min='0' max='9' className={styles.input}></input>
        </div>
      </div>
      <div className={styles.hr}>
        <hr></hr>
      </div>
      <div className={styles.subtrahend}>
        <div className={styles.block}>
          <input type='number' min='0' max='9' className={styles.input}></input>
        </div>
        <div className={styles.block}>
          <input type='number' min='0' max='9' className={styles.input}></input>
        </div>
      </div>
    </div>
  );
};

export default VerticalForm;
