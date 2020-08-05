import React from "react";
import VerticalForm from "./components/VerticalForm";
import styles from "./App.module.scss";
import Visual from "./components/Visual";
import DataProvider from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <div className={styles.layout}>
        <Visual />
        <VerticalForm />
      </div>
    </DataProvider>
  );
}

export default App;
