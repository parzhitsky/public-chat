import React from "react";
import styles from "./main.module.css";
import TextInput from "./Inputs/TextInput";
import Messages from "./Messages/Messages";
export default function ChatContainer() {
  return (
    <div className={styles.container}>
      <Messages />
      <TextInput />
    </div>
  );
}
