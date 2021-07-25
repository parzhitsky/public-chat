import React from "react";
import Message from "./Message/Message";

import styles from "./messages.module.css";
export default function Messages() {
  return (
    <div className={styles.messages}>
      <Message />
      <Message />
      <Message />
    </div>
  );
}
