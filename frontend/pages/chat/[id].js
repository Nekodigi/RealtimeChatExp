import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { useEffect } from "react";
 
export default function ChatPage(){
  const router = useRouter();
  
  const test = async () => {
    let chatRef = doc(db, "chats", "dWYdiIukmXPFxcIkh2Om");//  router.query.id
    let msgRefs = await getDocs(collection(db, "chats", "dWYdiIukmXPFxcIkh2Om", "msgs"));
    
    //const qSnap = getDocs(msgRefs)
    //console.log(qSnap.docs.map(d => ({id: d.id, ...d.data()})))
    
    console.log(msgRefs.docs.length);
    let msgDatas = msgRefs.docs.map(msgRef => msgRef.data());
    console.log(msgDatas);
    


    let chatDoc = await getDoc(chatRef);
    let chatData = chatDoc.data();
    console.log(chatData);
  }
  test();
  

  return (
    <div>
      <h1>CHAT {router.query.id}</h1>
    </div>
  )
}