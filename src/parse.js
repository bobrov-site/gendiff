import { readFileSync } from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';

const getFilePath = (file) => path.resolve(cwd(), file);

const getFileType = (file) => path.extname(file);

const getFileParse = (data, fileType) => {
  switch (fileType) {
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown extension: '${fileType}'!`);
  }
};

const parseFile = (file) => {
  const filePath = getFilePath(file);
  const fileData = readFileSync(filePath, 'utf8');
  const fileType = getFileType(file);
  const parsedData = getFileParse(fileData, fileType);
  return parsedData;
};
export default parseFile;
