import * as multer from 'multer';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback,
  ) => { cb(null, 'src/uploads/'); },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: FilenameCallback,
  ) => { cb(null, `${Date.now()}-${file.originalname}`); },
});

const upload = multer({ storage });

export default upload;
