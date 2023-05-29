import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors()) // cors
app.use(express.json()) // parser
app.use(express.urlencoded({ extended: true })) // encoded data

app.get('/', (req: Request, res: Response) => {
  res.send('Server is ready to work')
})

export default app
