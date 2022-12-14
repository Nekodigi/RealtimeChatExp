import {  AddCommentRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";


export default function NewChat(){
  const [open, setOpen] = useState(false);
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

  const createNewChat = async () => {
    setOpen(false);
    const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/create`)).text();
    console.log(res);
    router.push(`/chat?id=${res}`);
  }
  
  return (
    <div>
      <IconButton onClick={() => setOpen(true)} color="inherit"><AddCommentRounded /></IconButton>
      <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            新しいチャットを始めますか？
          </Typography>
          
          <Box display="flex" justifyContent="flex-end"><Button onClick={() => createNewChat()}>CREATE</Button></Box>
          </Paper>
        </Modal>
    </div>
  )
}