import 'dotenv/config'
import express from 'express';
import routes from './routes';
import cors from 'cors';
// import './database';

const app = express();

app.use(cors());        
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;