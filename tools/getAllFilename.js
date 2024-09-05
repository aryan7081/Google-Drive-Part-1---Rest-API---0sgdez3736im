import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default function getAllFiles() {
  const dirPath = path.join(__dirname, '../root');
  const files = fs.readdirSync(dirPath);
  return { files: files };
}


