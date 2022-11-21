import { Box, Button, Paper, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, onSnapshot, query, setDoc } 
from "firebase/firestore";
import firebaseConfig from "../secret/FBSdk.json" assert {type: 'json'};

type Msg = {
  uname:string,
  text:string
}

export default function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [uname, setUname] = useState("");
  const [text, setText] = useState("");

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app); //no need for app if auth is not required

  const pushMsg = () => {
    const msg = {uname:uname, text:text};
    addDoc(collection(db, "chat"), msg);
  }

  useEffect(() => {
    
    return () => {//function should be called only once
      const q = query(collection(db, "chat"));
      const change = onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
          setMsgs((prevMsg) => [...prevMsg, doc.data() as Msg]);
        })
      })
      // onChildAdded(dbRef, (data) => {   
      //   const msg  = data.val();    //get data
      //   const key  = data.key;      //key for delete and update
      //   setMsgs((prevMsg) => [...prevMsg, msg]);
      // });
    }
  }, [])
  



  return <div>
    <h1>Realtime Database Chat</h1>
    <TextField id="name-input" label="お名前" variant="outlined" onChange={(e) => setUname(e.target.value)} /><br />
    <TextField id="name-input" label="テキストを入力" margin="normal" fullWidth multiline rows={4} variant="outlined" onChange={(e) => setText(e.target.value)}/><br />
    <Button variant="contained" onClick={() => pushMsg()} sx={{float:"right"}}>送信</Button>
    <div className="res">
      {msgs.slice().reverse().map((msg, i) => <Box key={i} sx={{p:2, borderBottom:"1px solid gray"}}><h4>{msg.uname}</h4><p>{msg.text}</p></Box>)}
    </div>
  </div>
}
