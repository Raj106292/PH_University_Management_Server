import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors()) // cors
app.use(express.json()) // parser
app.use(express.urlencoded({ extended: true })) // encoded data

// Application routes
app.use('/api/v1/users', userRouter)

// create my own format for the error
// class APIError extends Error {
//   statusCode: number

//   constructor(statusCode: number, message: string | undefined, stack = '') {
//     super(message)
//     this.statusCode = statusCode
//     if (stack) {
//       this.stack = stack
//     } else {
//       Error.captureStackTrace(this, this.constructor)
//     }
//   }
// }

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is ready to work')
  // throw new Error("No man! It's an error")
  // next("No man! It's an error");
})

// global error handler
// app.use((err, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof Error) {
//     res.status(400).json({})
//   } else {
//     res.status(500).json({ error: 'Something went wrong' })
//   }
// })

export default app
