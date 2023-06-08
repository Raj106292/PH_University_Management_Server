import httpStatus from 'http-status';
import APIError from '../../../errors/APIError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constants';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemester = async (
  academicSemester: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (
    academicSemesterTitleCodeMapper[academicSemester.title] !==
    academicSemester.code
  ) {
    throw new APIError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
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
