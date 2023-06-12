import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
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
});

//global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl, // get the url in the path
        message: 'API not found',
      },
    ],
  });
  next();
});

export default app;
