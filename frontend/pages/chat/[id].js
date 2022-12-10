import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import Msg from "../../components/msg";
import { Chip, Container } from "@mui/material";
import { Box } from "@mui/system";
 
export default function ChatPage(){
  const [msgs, setMsgs] = useState([]);
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

  return (
    <div>
      <Container>
        <h1>CHAT {router.query.id}</h1>
        <Box display="flex" flexDirection="column" gap={2}>
          {msgs.map((msg, i) => <Msg key={i} msg={msg} />)}
        </Box>
        
        {msgs.map((msg, i) => <p key={i}>{JSON.stringify(msg)}</p>)}
      </Container>
      
    </div>
  )
}