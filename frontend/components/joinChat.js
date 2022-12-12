import { Box, Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";


export default function JoinChat(){
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const router = useRouter();
    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
  };
  
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
          <Box display="flex" justifyContent="flex-end"><Button onClick={() => {setOpen(false);router.push(`/chat/${id}`);}}>JOIN</Button></Box>
          </Paper>
          {/* </Box> */}
        </Modal>
    </div>
  )
}