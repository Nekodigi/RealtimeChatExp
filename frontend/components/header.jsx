import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import JoinChat from "./joinChat";
import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import InviteChat from "./inviteChat";
import NewChat from "./newChat";

export default function Header() {
  const appBarRef = useRef();
  const [appBarPB, setAppBarPB] = useState(0);

  useEffect(() => {
    setAppBarPB(appBarRef.current.clientHeight / 8);
  }, [appBarRef]);

  return (
    <div>
      <AppBar ref={appBarRef}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              QR Chat
            </Typography>
            <InviteChat />
            <JoinChat />
            <NewChat />
          </Toolbar>
        </Container>
      </AppBar>

      <Container className="header spacer" sx={{ pb: appBarPB }}></Container>
    </div>
  );
}
