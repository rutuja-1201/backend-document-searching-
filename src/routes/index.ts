// import express from 'express';
// import multer from 'multer';
// import { uploadFile } from '../controllers/fileController';
// import { searchDocuments } from '../controllers/searchController';

// const router = express.Router();
// const upload = multer(); 


// router.post('/upload', upload.single('file'), uploadFile); 
// router.get('/search'); 

// export default router;
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { uploadFile } from '../controllers/fileController';
import { searchDocuments } from '../controllers/searchController';

const app = express();
const upload = multer();


app.use(cors());


app.post('/upload', upload.single('file'), uploadFile);
app.get('/search',searchDocuments);

export default app;
