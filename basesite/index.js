const express = require('express');
const path = require('path');
const fs = require('fs')
const multer = require('multer')
const imgPostDatabase = require('./database.json')
const app = express();
const PORT = 3000;


app.use(
  express.static(path.join(__dirname,'build'))
);
const imgExt = '.png' || '.jpg' || '.webp'
const imgDir = './images'

app.use(express.json())
app.use('/images',express.static(path.join(__dirname,'images')))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgDir)
  },
  filename: (req, file, cb)=>{
    cb(null, file.originalname)
  }
})
const upload = multer({
 storage: storage
})
app.post('/uploadImg',upload.single('imgInput'),
  (req,res)=>{
    console.log(req.file)
    if(req.file){
      
      const targetPath = path.join(imgDir,req.file.originalname);

      const data = fs.readFileSync('database.json');
      const newImgPost = {
        'id': Date.now(),
        'imageURL': targetPath
      }
      const jsondata = JSON.parse(data)
      jsondata.push(newImgPost)
      fs.writeFileSync('database.json','')
      fs.writeFileSync('database.json',JSON.stringify(jsondata,null,' '))
      res.status(200).redirect('/')
      
    }
    else{
      
      console.log('uh nothing')
      res.status(400).send('No file submitted')
    }
});
/**/
app.get('/show/:post_id',(req, res)=>{
  res.send()
})
app.delete('clearAll',(req, res)=>{
  const imgfolder = 
  fs.unlink()
})
app.get('/showAll', (req, res)=>{
  console.log(imgPostDatabase)
  res.json(imgPostDatabase);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });