import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  )
);

router.get('/:id');

router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
  )
);

router.delete('/:id');

router.get('/');

export const AcademicDepartmentRoute = router;
