import express from 'express';
import  createAfile from './tools/createAfile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';
import deleteAFile from './tools/deleteAFile.js';
import getAllFileNames from './tools/getAllFilename.js';
const app = express();
const port = 8000;

app.use(express.json());

app.get("/file",(req, res)=>{
  const { files } = getAllFiles()
  res.json(files)
})

app.get("/file/:fileName",(req, res)=>{
  
  const result = getAFile(req.params.fileName)
  res.json(result)
})

app.post("/file/create",(req, res)=>{
  const {fileName, fileData} = req.body
  const result = createAfile(fileName, fileData)
  res.json(result)
})

app.put("/file/:fileName",(req, res)=>{
  const { updatedFileName, newFileData} = req.body
  const result = updateAfile(req.params.fileName, updatedFileName, newFileData)
  res.json(result)
})

app.delete("/file/:fileName",(req, res)=>{
  const result = deleteAFile(req.params.fileName)
  res.json(result)
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  
});
