import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const getAFile = (fileName) => {
    const dirPath = path.join(__dirname, '../root');
    if (!fs.existsSync(`${dirPath}/${fileName}`)) {
        return { message: 'File does not exist' };
      }
    const fileContent =  fs.readFileSync(`${dirPath}/${fileName}`, "utf-8")
    
    return { fileContent }
}

export default getAFile;