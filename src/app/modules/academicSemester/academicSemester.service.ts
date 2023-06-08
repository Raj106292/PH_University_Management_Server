import APIError from '../../../errors/APIError';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemester = async (
  academicSemester: IAcademicSemester
): Promise<IAcademicSemester> => {
  const createAcademicSemester = await AcademicSemester.create(
    academicSemester
  );
  if (!createAcademicSemester) {
    throw new APIError(400, 'Failed to create Academic Semester');
  }
  return createAcademicSemester;
};

export const AcademicSemesterService = {
  createAcademicSemester,
};
