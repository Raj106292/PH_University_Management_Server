import { ErrorRequestHandler } from 'express' // error type of global request handler
import config from '../../config'
import APIError from '../../errors/APIError'
import handleValidationError from '../../errors/handleValidationError'
import { IGenericErrorMessage } from '../../interfaces/error'

// global error handler
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500
  let message = 'Internal Server Error'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof APIError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env === 'development' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
