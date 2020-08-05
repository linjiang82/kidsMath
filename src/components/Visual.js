import React, { useContext } from "react";
import Tens from "./Tens";
import Ones from "./Ones";
import styles from "./Visual.module.scss";
import { DataContext } from "../context/dataContext";

const Visual = () => {
  const { state } = useContext(DataContext);
  const itemsOfTens = [];
  const itemsOfOnes = [];
  for (let i = 0; i < Math.floor(state.tens); i++) {
    itemsOfTens.push(<Tens key={i}></Tens>);
  }
  for (let i = 0; i < state.ones; i++) {
    itemsOfOnes.push(<Ones key={i}></Ones>);
  }
  return (
    <div className={styles.visual}>
      <div className={styles.tensFrame}>{itemsOfTens}</div>
      <div className={styles.onesFrame}>{itemsOfOnes}</div>
    </div>
  );
};

export default Visual;
