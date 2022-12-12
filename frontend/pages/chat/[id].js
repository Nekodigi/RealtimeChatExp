import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"; 
import { useEffect, useRef, useState } from "react";
import Msg from "../../components/msg";
import { Button, Chip, Container, Divider, Grid, IconButton, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AttachFileRounded, Delete, InsertDriveFileRounded, SendRounded } from "@mui/icons-material";
 
export default function ChatPage(){
  const [msgs, setMsgs] = useState([]);
  const [chatMB, setChatMB] = useState(20);
  const inputBoxRef = useRef();
  const router = useRouter();
  
  useEffect(() => {
    const access_db = async () => {
      if(!router.isReady)return;
      //let chatRef = doc(db, "chats", router.query.id);//  router.query.id

      //console.log(await (await getDocs(collection(db, "chats"))).docs.map(doc => doc.data()))

      let q = query(collection(db, "chats", router.query.id, "msgs"), orderBy("created", "desc"), limit(10));
      let msgRefs = await getDocs(q);
      
      //let chatDoc = await getDoc(chatRef);
      //let chatData = chatDoc.data();

      let msgDatas = msgRefs.docs.map(msgRef => msgRef.data()).reverse();
    
      console.log(msgDatas);
      setMsgs(msgDatas);
    }

    access_db();
  }, [router])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);

    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [msgs])

  useEffect(() => {
    setChatMB(inputBoxRef.current.clientHeight/8+2);
    console.log(inputBoxRef.current.clientHeight);
  }, [inputBoxRef, msgs])

  return (
    <div>
      <Container maxWidth="sm" sx={{pb:chatMB}}>
        <h1>CHAT {router.query.id}</h1>
        <Box display="flex" flexDirection="column" gap={2}>
          {msgs.map((msg, i) => <Msg key={i} msg={msg} />)}
        </Box>
        
      </Container>
      
      <Container ref={inputBoxRef} maxWidth="sm"  style={{position:"fixed", bottom:0, margin:"auto", left:0, right:0, background:"#ffffff"}}>
      <Divider />
        <Box >
          <TextField multiline maxRows={4} fullWidth label="メッセージを入力" margin="normal"></TextField>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{mb:2}}>
          <IconButton aria-label="attach file" component="label">
            <AttachFileRounded />
            <input hidden multiple type="file" />
          </IconButton>

          <IconButton aria-label="send">
            <SendRounded />
          </IconButton>
        </Box>
      </Container>
      
    </div>
  )
}

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
