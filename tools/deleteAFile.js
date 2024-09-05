import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const deleteAFile = (fileName) => {
    const dirPath = path.join(__dirname,'../root')
    fs.unlinkSync(`${dirPath}/${fileName}`)
    return {message: "File Deleted Successfully"}
};

export default deleteAFile;
