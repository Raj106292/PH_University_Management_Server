import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config/index'; // default export
import APIError from '../../../errors/APIError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { generateStudentId } from './user.utils';
import { User } from './users.model';

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // append role from backend
  user.role = 'student';

  // find academic semester for student
  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );

  // transaction and rollback
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // generate student id
    const id = await generateStudentId(academicSemester);
    user.id = id;
    student.id = id;

    // create student
    const newStudent = await Student.create([student], { session });
    if (!newStudent.length) {
      throw new APIError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    // set _id of student in the user as student
    user.student = newStudent[0]._id; // because of using transaction newStudent is an array with only one document

    // create user
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new APIError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction(); // all process successful -> commit transaction
    await session.endSession();
  } catch (error) {
    await session.abortTransaction(); // if we got any error then the transaction will aborted
    await session.endSession();
    throw error;
  }

  // populate all reference fields
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAllData;
};

export const UserService = {
  createStudent,
};
