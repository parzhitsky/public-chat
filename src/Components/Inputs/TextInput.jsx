import React from "react";
import styles from "./textInput.module.css";

export default function TextInput() {
  return (
    <form className={styles.inputs}>
      <div className={styles.enterName}>
  <input placeholder='Enter your name'/>
      </div>

      <div className={styles.textareaButton}>
        <textarea placeholder='Type...' />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
