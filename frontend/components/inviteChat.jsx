import { PersonAddAltRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Paper, TextField, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from 'react-qr-code';


export default function InviteChat(){
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const router = useRouter();
  const [copyMsg, setCopyMsg] = useState("Copy");
    
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
      {/* Invite Chat */}
      <IconButton onClick={() => setOpen(true)} color="inherit"><PersonAddAltRounded /></IconButton>
      <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          {/* <Box sx={style}> */}
          <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
              チャットに招待
          </Typography>
          <Tooltip title={<Typography>{copyMsg}</Typography>} placement="top-end" >
          <TextField fullWidth id="outlined-basic" label="IDをコピー" value={router.query.id} onChange={(e) => setId(e.target.value)} variant="outlined" margin="normal" 
          InputProps={{readOnly:true}} onClick={() => {navigator.clipboard.writeText(router.query.id); setCopyMsg("Copied!");}}/>
          </Tooltip>
          {/* <p>{typeof window !== "undefined" ? window.location.href : ""}</p> */}
          <Box sx={{ m: 4 }}><QRCode style={{width:"100%", height:"100%"}} value={typeof window !== "undefined" ? window.location.href : ""} /></Box>
          {/* <Box display="flex" justifyContent="flex-end"><Button onClick={() => {setOpen(false);router.push(`/chat?id=${id}`);}}>JOIN</Button></Box> */}
          </Paper>
          {/* </Box> */}
        </Modal>
    </div>
  )
}