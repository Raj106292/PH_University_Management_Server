import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { AcademicSemesterRoute } from './app/modules/academicSemester/academicSemester.route';
import { UserRoute } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors()); // cors
app.use(express.json()); // parser
app.use(express.urlencoded({ extended: true })); // encoded data

// Application routes
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/academic-semesters', AcademicSemesterRoute);

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is working fine');
  // throw new Error('Testing error logger')
});

//global error handler
app.use(globalErrorHandler);

export default app;
