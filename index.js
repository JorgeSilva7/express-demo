import express from 'express';
import userRouter from './src/routes/user.router.js';
import { PORT } from './src/configs/environment.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.get('/', function (req, res) {
  res.send('<h1>Hola mundo</h1>');
});

async function startSever() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

startSever();
