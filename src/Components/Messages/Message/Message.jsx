import React from "react";
import styles from "./message.module.css";

export default function Message() {
  return (
    <div className={styles.message}>
      <div className={styles.messageHead}>
        <div className={styles.name}>Name</div>
        <div className={styles.dateTime}>Date/time</div>
      </div>
      <div className={styles.messageBody}>
        Pin a footer to the bottom of the viewport.The footer will move as the
        main element of the page grows.
      </div>
    </div>
  );
}
