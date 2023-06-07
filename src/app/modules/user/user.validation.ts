import { z } from 'zod'

// req validation
// body contains -> object type data
// the type of the data of body also -> object

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
})

export const USerValidation = {
  createUserZodSchema,
}
