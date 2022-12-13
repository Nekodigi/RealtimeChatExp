const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const upload = async () => {
    try {
      const file = fs.createReadStream('./sampleData/SiteSucker_2.4.6.dmg');
      const file2 = fs.createReadStream('./sampleData/s1AjSxph_400x400.jpeg');
      const file3 = fs.createReadStream('./sampleData/myfile.txt');
      const file4 = fs.createReadStream('./sampleData/ぶっ壊れ『Raiden PV _ 雷電将軍 PV』.mp4');
      const file5 = fs.createReadStream('./sampleData/cmake-3.24.0-windows-x86_64.msi');
      const title = '新しい API My file';
      
      const form = new FormData({ maxDataSize: Infinity });
      form.append('title', title);
      //form.append('file', file);
      form.append('file', file4, encodeURIComponent("ぶっ壊れ『Raiden PV _ 雷電将軍 PV』.mp4"));
      //form.append('file', file3);
      //form.append('file', file);
      
      //let url = "https://us-central1-realtime-chat-9abd8.cloudfunctions.net/app";
      //console.log(form.getHeaders());
      //let url = "https://us-central1-realtime-chat-9abd8.cloudfunctions.net/app"
      let url = "http://localhost:4000"
      const resp = await axios.post(url+'/api/chat/add/GlvLr8u', form, {
        headers: {
          ...form.getHeaders(),
        }
      });
      
      if (resp.status === 200) {
        console.log(resp.data);
        return 'Upload complete';
      } 
    } catch(err) {
      console.log(err.message);
      console.log(err.response.data);
      //return new Error(err.message);
    }
  }
    
  upload().then(resp => console.log(resp));