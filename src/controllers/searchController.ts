import { Request, Response } from 'express';
import { searchFiles } from '../services/searchService';

export const searchDocuments = async (req: Request, res: Response): Promise<void> => {
    try {
        const { query } = req.query;
        if (!query) {
            res.status(400).json({ message: 'Query is required' });
            return;
        }

        const results = await searchFiles(query as string);
        console.log("results",results)
        res.status(200).json(results.map((r: any) => r._source));
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during the search' });
    }
};
