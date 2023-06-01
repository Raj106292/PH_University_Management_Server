import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors()) // cors
app.use(express.json()) // parser
app.use(express.urlencoded({ extended: true })) // encoded data

// Application routes
app.use('/api/v1/users', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is ready to work')
})

export default app
