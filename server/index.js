
const express = require("express");
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const uri = process.env.uri;
const port = 3000;
const app = express();
const cors = require('cors');
const CryptoJS = require('crypto-js'); 
const mongoose = require('mongoose');
app.use(cors({
  // origin: "https://vercel-frontend-five.vercel.app/",
  // methods: ['GET', 'POST'],
  // credentials: true
}));
app.use(express.json())
app.post('/', async (req, res) => {
  try {
    const { date, title, entry, enKey } = req.body;
    console.log(enKey,entry);
    if (!enKey) {
      return res.status(400).json({ message: 'Encryption key is required' });
    }

    const currentDate = new Date();
    const filename = `${req.body.title}-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}-.txt`;
    const filePath = path.join(__dirname, 'diary', filename);

    if (!fs.existsSync(path.join(__dirname, 'diary'))) {  
      fs.mkdirSync(path.join(__dirname, 'diary'));
    }

    // Decrypt the diary entry
    const decryptedEntry = CryptoJS.AES.decrypt(entry, enKey).toString(CryptoJS.enc.Utf8);

    fs.writeFileSync(filePath, `Date: ${date}\nTitle: ${title}\nContent:\n${decryptedEntry}`);
    res.status(201).json({ message: 'Diary entry saved successfully', filename });
  } catch (error) {
    console.log('Error saving diary entry:', error);
    res.status(500).json({ message: 'Failed to save diary entry. Please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello world');
})
app.get('/data',async (req,res) =>{
  await res.send()
})
mongoose.connect(uri).then(() =>{
  console.log('Database connected');
}).catch((e)=>{
  console.log(e)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
