const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const upload = async () => {
    try {
      const file = fs.createReadStream('./SiteSucker_2.4.6.dmg');
      const file2 = fs.createReadStream('./s1AjSxph_400x400.jpeg');
      const file3 = fs.createReadStream('./myfile.txt');
      const title = 'My file';
      
      const form = new FormData({ maxDataSize: Infinity });
      form.append('title', title);
      //form.append('file', file);
      //form.append('file', file2);
      //form.append('file', file3);
      //form.append('file', file);
      
      const resp = await axios.post('http://localhost:4000/api/chat/add/fmbygOKwyTHE2xCCaIwy', form, {
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