import pdf from 'pdf-parse';
import mammoth from 'mammoth';

export const parsePDF = async (buffer: Buffer) => {
    const data = await pdf(buffer);
    return data.text;
};

export const parseDOCX = async (buffer: Buffer) => {
    const { value } = await mammoth.extractRawText({ buffer });
    return value;
};
