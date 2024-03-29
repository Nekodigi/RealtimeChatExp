import {
  AttachFileRounded,
  InsertDriveFileRounded,
  SendRounded,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ChatInput({ id, inputBoxRef }) {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("TEST");
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => setFiles((prev) => [...prev, file]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const addFile = (e) => {
    console.log(e);

    //form.append('file', e.target.files[0]);

    //Array.from(e.target.files).forEach(file => form.append("file", file));
    //Array.from(e.target.files).forEach(file => console.log(file));
    Array.from(e.target.files).forEach((file) =>
      setFiles((prev) => [...prev, file])
    );
  };

  const doSend = async (e) => {
    const form = new FormData(); //{ maxDataSize: 10*1000*1000 } works?
    form.append("title", text);
    files.forEach((file) => form.append("file", file));

    setText("");
    setFiles([]);
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const config = { headers: { "content-type": `multipart/form-data; ` } };
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/chat/add/${id}`,
      form,
      config
    );
    console.log(resp.data);
  };

  return (
    <div {...getRootProps({ onClick: (event) => event.stopPropagation() })}>
      <input {...getInputProps()} />
      <Container
        ref={inputBoxRef}
        maxWidth="sm"
        style={{
          position: "fixed",
          bottom: 0,
          margin: "auto",
          left: 0,
          right: 0,
          background: "#ffffff",
        }}
      >
        <Divider />
        <Box>
          {/* メッセージを入力 */}
          <TextField
            multiline
            maxRows={4}
            fullWidth
            label="Input text..."
            margin="normal"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
        </Box>
        <Box display="flex" flexDirection="row" gap={1} flexWrap={"wrap"}>
          {files.map((file, i) => (
            <Chip
              key={i}
              icon={<InsertDriveFileRounded />}
              label={file.name}
              onDelete={() =>
                setFiles((files) => files.filter((f) => f.name !== file.name))
              }
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <IconButton aria-label="attach file" component="label">
            <AttachFileRounded />
            <input hidden multiple onChange={addFile} type="file" />
          </IconButton>
          <IconButton aria-label="send" onClick={doSend}>
            <SendRounded />
          </IconButton>
        </Box>
      </Container>
    </div>
  );
}
