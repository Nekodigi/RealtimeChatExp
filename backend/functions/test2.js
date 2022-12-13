const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const upload = async () => {
    try {
      const file = fs.createReadStream('./SiteSucker_2.4.6.dmg');
      const file2 = fs.createReadStream('./s1AjSxph_400x400.jpeg');
      const file3 = fs.createReadStream('./myfile.txt');
      const title = 'New API My file';
      
      const form = new FormData({ maxDataSize: Infinity });
      form.append('title', title);
      //form.append('file', file);
      form.append('file', file2);
      //form.append('file', file3);
      //form.append('file', file);
      
      //let url = "https://us-central1-realtime-chat-9abd8.cloudfunctions.net/app";
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
      return new Error(err.message);
    }
  }
    
  upload().then(resp => console.log(resp));