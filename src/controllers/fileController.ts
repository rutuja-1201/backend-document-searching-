import { Request, Response } from 'express';
import { indexFileContent } from '../services/searchService';

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return; 
    }

    const fileContent = req.file.buffer.toString();
    const metadata = {
        fileName: req.file.originalname,
        content:"",
        lastModified: new Date(),
    };

    await indexFileContent(req.file.originalname, fileContent, metadata);
    res.status(200).json({ message: 'File indexed successfully' });
};
