import { AttachFileRounded, InsertDriveFileRounded, SendRounded } from "@mui/icons-material";
import { Box, Chip, Container, Divider, IconButton, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ChatInput({id, inputBoxRef}){
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  
  const addFile = (e) => {
    console.log(e.target.files);

    
    //form.append('file', e.target.files[0]);
    
    //Array.from(e.target.files).forEach(file => form.append("file", file));
    //Array.from(e.target.files).forEach(file => console.log(file));
    Array.from(e.target.files).forEach(file => setFiles((prev) => [...prev, file]));
  }

  const doSend = async (e) => {
    const form = new FormData();//{ maxDataSize: 10*1000*1000 } works?
    form.append('title', text);
    files.forEach(file => form.append('file', file));

    setText("");
    setFiles([]);
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const config = { headers: { 'content-type': `multipart/form-data; ` }};
    const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/add/${id}`, form, config);
    console.log(resp.data);
  }

  return (
    <Container ref={inputBoxRef} maxWidth="sm"  style={{position:"fixed", bottom:0, margin:"auto", left:0, right:0, background:"#ffffff"}}>
      <Divider />
        <Box >
          <TextField multiline maxRows={4} fullWidth label="メッセージを入力" margin="normal" value={text} onChange={(e) => setText(e.target.value)}></TextField>
        </Box>
        <Box display="flex" flexDirection="row" gap={1} flexWrap={"wrap"}>
        {files.map((file, i) => <Chip key={i} icon={<InsertDriveFileRounded/>} label={file.name} onDelete={() => setFiles((files) => files.filter((f) => f.name !== file.name))}/> )}
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{mb:2}}>
          <IconButton aria-label="attach file" component="label">
            <AttachFileRounded />
            <input hidden multiple onChange={addFile} type="file" />
          </IconButton>

          <IconButton aria-label="send" onClick={doSend}>
            <SendRounded />
          </IconButton>
        </Box>
      </Container>      
  )
}