const { uploadFile, getUrl } = require("../../infrastructure/firebaseStorage/firebaseStorage");
const { db } = require("../../infrastructure/firestore/firestore");
const { randomDocId } = require("../../utils/hash");

exports.add = async(req, res) => {
    let id = req.params.id;
    let msgs = db.collection("chats").doc(id).collection("msgs");
    let msgId = randomDocId();
    let totalSize = req.files.reduce((accum, file) => accum+file.size, 0);
    console.log(totalSize);
    if(totalSize > 1000*1000*10){res.send("size limit exceeded"); return;}

    let fileURLs = await Promise.all(req.files.map(async file => {
        let path = `chats/${id}/${msgId}/${file.originalname}`
        await uploadFile(file.path, path);
        let url = await getUrl(path);
        return url;
    }));
    console.log(fileURLs);
    let msgData = {
        id:msgId,
        created:new Date(),
        updated:new Date(),
        text:req.body.title,
        files:fileURLs
    }
    msgs.doc(msgId).set(msgData);
    res.send(msgId);
}

exports.create = async (req, res) => {
    let chatData = {
        id:randomDocId(),
        created:new Date(),
        updated:new Date()
    }
    
    let docRef = await db.collection("chats").doc(chatData.id);
    docRef.set(chatData);
    let docData = (await docRef.get()).data();
    let msgData = {
        id:randomDocId(),
        created:new Date(),
        updated:new Date(),
        text:"新しいチャットにようこそ。",
        files:[]
    }
    await docRef.collection("msgs").doc(msgData.id).set(msgData);
    res.send(docRef.id);
}