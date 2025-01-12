import React from "react";
import styles from "./ResultContainerInfo.module.css";

const ResultContainerInfo = ({ text }) => {
  return <p className={styles.info}>{text}</p>;
};

export default ResultContainerInfo;
