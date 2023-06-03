import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('😍 Database connected successfully') // all success log is an info

    app.listen(config.port, () => {
      logger.info(`Server is running on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error) // error log
  }
}

bootstrap()
