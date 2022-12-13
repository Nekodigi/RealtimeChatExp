const { uploadFile, getUrl } = require("../../infrastructure/firebaseStorage/firebaseStorage");
const { db } = require("../../infrastructure/firestore/firestore");
const { randomDocId } = require("../../utils/hash");
const busboy = require("busboy");
var meter = require('stream-meter');


const fs = require('fs');
const os = require('os');
const path = require('path');


const { randomFillSync } = require('crypto');
const { envVar } = require("../../utils/var");

const random = (() => {
    const buf = Buffer.alloc(16);
    return () => randomFillSync(buf).toString('hex');
  })();

exports.add = async(req, res) => {
  let files = [];
  let body = {};

  const bb = busboy({ headers: req.headers, limits:{fileSize:1024*1024*10} });
  bb.on('file', (name, file, info) => {
    console.log(name, file, info)
    const filename = decodeURIComponent(info.filename);
    const saveTo = path.join(os.tmpdir(), `${filename}`);//os.tmpdir()  `busboy-upload-${random()}`
    var m = meter();
    
    file.pipe(m).pipe(fs.createWriteStream(saveTo));
    file.on('end', () => {files.push({path:saveTo, name:filename, size:m.bytes})});
    file.on('limit', function() {
      res.writeHead(413, { 'Connection': 'close' });
      res.end(`file size limit exceeded`);
    });
    
  });
  bb.on('field', (name, val, info) => {
    body[name] = val;
  });
  bb.on('finish', async () => {
    //do something here!
    console.log(files);
    req.body = body;
    let status = await addChatWithFile(req, files);
    
    console.log(status);
    res.writeHead(200, { 'Connection': 'close' });
    res.end(status);
  });
  console.log(envVar.isDev);
  if(envVar.isDev){
    req.pipe(bb);
  }else{
    bb.end(req.rawBody);
  }
  
}

const addChatWithFile = async (req, files) => {
  let msgs = db.collection("chats").doc(req.params.id).collection("msgs");
  let msgId = randomDocId();
  let totalSize = files.reduce((accum, file) => accum+file.size, 0);
  console.log(totalSize);
  if(totalSize > 1024*1024*10){return "size limit exceeded";}
  let fileURLs = await Promise.all(files.map(async file => {
      let path = `chats/${req.params.id}/${msgId}/${file.name}`
      console.log(path, file.path)
      await uploadFile(file.path, path);
      let url = await getUrl(path);
      return url;
  }));
  //console.log(fileURLs);
  //console.log(req.body)
  let msgData = {
      id:msgId,
      created:new Date(),
      updated:new Date(),
      text:req.body.title,
      files:fileURLs
  }
  //console.log(msgData)
  msgs.doc(msgId).set(msgData);
  return "upload completed";
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