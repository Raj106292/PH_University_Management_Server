import { z } from 'zod';

const createFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required for update',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
  updateAcademicFacultyZodSchema,
};
