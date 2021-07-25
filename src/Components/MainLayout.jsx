import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import ChatContainer from "./ChatContainer";

export default function SMainLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ padding: "0" }}>
        <Typography
          component="div"
          style={{  height: "100vh" }}
        >
          <ChatContainer />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
