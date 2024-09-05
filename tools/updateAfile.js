import fs from 'fs';
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const updateAfile = (fileName,updatedFileName,newFileData) => {
    const filePath = path.join(__dirname,'../root', fileName)
    const updatedFilePath = path.join(__dirname,'../root', updatedFileName)
    
    if (!fs.existsSync(filePath)){
        return {message: "File does not exist"}
    }

    fs.renameSync(filePath, updatedFilePath)
    return {message: "File updated successfully"}

};

export default updateAfile