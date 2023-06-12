import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createAcademicSemester
);

router.get('/:id', AcademicSemesterController.getSingleSemester);

router.patch('/:id', AcademicSemesterController.updateSemester);

router.get('/', AcademicSemesterController.getAllSemester);

export const AcademicSemesterRoute = router;
