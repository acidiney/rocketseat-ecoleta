import cors from 'cors';
import path from 'path'
import express from 'express';

import routes from './routes'

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// get static icons
app.use('/uploads', express.static(path.resolve(__dirname, '..' ,'public', 'uploads')))

app.listen(3333)