import { OpenInNewRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { QrReader } from "react-qr-reader";

export default function JoinChat() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [qrText, setQrText] = useState("No result");
  const router = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)} color="inherit">
        <OpenInNewRounded />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          {/* チャットに参加 */}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Join chat
          </Typography>
          {/* IDを入力 */}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Input ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            variant="outlined"
            margin="normal"
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={() => {
                setOpen(false);
                router.push(`/chat?id=${id.slice(-7)}`);
              }}
            >
              JOIN
            </Button>
          </Box>
        </Paper>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
