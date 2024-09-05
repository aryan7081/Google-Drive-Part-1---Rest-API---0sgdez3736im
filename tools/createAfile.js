import fs from 'fs';
import {fileURLToPath} from 'url'
import path from 'path'
import {dirname} from 'path'


const __dirname = dirname(fileURLToPath(import.meta.url))
const createAfile = (fileName, fileData) => {
    const dirPath = path.join(__dirname,'../root')
    fs.writeFileSync(`${dirPath}/${fileName}`,fileData)
    return {"message": "File created successfully"}
};

export default createAfile;
