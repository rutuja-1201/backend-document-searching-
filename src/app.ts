import express from 'express';
import multer from 'multer';
import routes from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const upload = multer();

app.use(express.json());
app.use('/api', routes); 

export default app;
