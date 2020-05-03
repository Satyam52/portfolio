import React from "react";
import styles from "./edu.module.css";
const Education = ({ title, post, date, detail }) => {
  return (
    <div className="vr">
      <div className={styles.postDate}>
        <h4 className={styles.h4}>{title}</h4>
        <span className={styles.date}>{date}</span>
      </div>
      <span className={styles.post}>{post}</span>
      <p className={styles.detail}>{detail}</p>
    </div>
  );
};

export default Education;
