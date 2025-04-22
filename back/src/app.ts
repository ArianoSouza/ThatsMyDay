// src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/user.routes'; 

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', router);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API está no ar! 🚀');
});

export default app;