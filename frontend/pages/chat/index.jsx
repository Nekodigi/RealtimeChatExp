import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { useEffect, useRef, useState } from "react";
import Msg from "../../components/msg";
import { Button, Chip, Container, Divider, Grid, IconButton, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AttachFileRounded, Delete, InsertDriveFileRounded, SendRounded } from "@mui/icons-material";
import ChatInput from "../../components/chatInput";
 
export default function ChatPage(){
  const [msgs, setMsgs] = useState([]);
  const [chatMB, setChatMB] = useState(20);
  const inputBoxRef = useRef();
  const router = useRouter();
  
  useEffect(() => {
    const access_db = async () => {
      if(!router.isReady)return;
      
      let q = query(collection(db, "chats", router.query.id, "msgs"), orderBy("created", "desc"), limit(50));
      
      const change = onSnapshot(q, (snapshot) => {
        setMsgs([]);
        snapshot.docs.reverse().forEach((doc) => {
          setMsgs((prevMsgs) => [...prevMsgs, doc.data()]);
        })
      })
      
      //let msgRefs = await getDocs(q);

      //let msgDatas = msgRefs.docs.map(msgRef => msgRef.data()).reverse();
    
      //console.log(msgDatas);
      //setMsgs(msgDatas);
    }

    access_db();

    if(inputBoxRef.current !== null && inputBoxRef.current !== undefined){
      console.log(inputBoxRef, inputBoxRef.current);
      const resizeObserver = new ResizeObserver(() => {
        // Do what you want to do when the size of the element changes
        setChatMB(inputBoxRef.current.clientHeight/8+2);
        console.log(inputBoxRef.current.clientHeight);
      });
      resizeObserver.observe(inputBoxRef.current);
      return () => resizeObserver.disconnect(); // clean up 
    }
  }, [router])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);

    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [msgs])

  

  return (
    <div>
      <Container maxWidth="sm" sx={{pb:chatMB, pt:4}} >
        {/* <h1>CHAT {router.query.id}</h1> */}
        <Box display="flex" flexDirection="column" gap={2}>
          {msgs.map((msg, i) => <Msg key={i} msg={msg} />)}
        </Box>
        
      </Container>
      
      <ChatInput id={router.query.id} inputBoxRef={inputBoxRef} />
      
    </div>
  )
}
