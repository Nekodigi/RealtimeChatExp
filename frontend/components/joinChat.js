import { Box, Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { QrReader } from "react-qr-reader";


export default function JoinChat(){
  const [open, setOpen_] = useState(false);
  const [id, setId] = useState("");
  const [qrText, setQrText] = useState('No result');
  const router = useRouter();
  const qrRef = useRef(null);
    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
  };

  const closeCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    stream.getTracks().forEach(function (track) {
        track.stop();
        track.enabled = false;
    });
    console.log(qrRef)
};

  const setOpen = (value) => {
    setOpen_(value);
    value ? undefined : closeCam();
  }
  
  return (
    <div>
      <Button onClick={() => setOpen(true)} color="inherit">Join Chat</Button>
      <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          {/* <Box sx={style}> */}
          <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
              チャットに参加
          </Typography>
          <TextField fullWidth id="outlined-basic" label="IDを入力" value={id} onChange={(e) => setId(e.target.value)} variant="outlined" margin="normal"/>
          {open ?  <QrReader
            ref={qrRef}
            onResult={(result, error) => {
              if (!!result) {
                setQrText(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: '200px' }}
          /> : null}
          <p>{qrText}</p>
          
          <Box display="flex" justifyContent="flex-end"><Button onClick={() => {setOpen(false);router.push(`/chat?id=${id.slice(-7)}`);}}>JOIN</Button></Box>
          </Paper>
          {/* </Box> */}
        </Modal>
    </div>
  )
}