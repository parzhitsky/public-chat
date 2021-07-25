import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./main.module.css";
import Messages from "./Messages/Messages";
export default function ChatContainer() {
  return (
    <div className={styles.container}>
      <Messages />

      <div className={styles.inputs}>
        <textarea />
        <div className={styles.typeName}>
          Отправить как: <input />
        </div>
        <button>Отправить</button>
      </div>
    </div>
  );
}
