import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors()); // cors
app.use(express.json()); // parser
app.use(express.urlencoded({ extended: true })); // encoded data

// Application routes by router folder
app.use('/api/v1', routes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is working fine');
  // throw new Error('Testing error logger')
});

//global error handler
app.use(globalErrorHandler);

export default app;
