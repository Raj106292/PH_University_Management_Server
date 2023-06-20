import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

export type IStudentGender = 'male' | 'female';
export type IStudentBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'O+'
  | 'O-'
  | 'AB+'
  | 'AB-';

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  relation: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName;
  gender: IStudentGender;
  dateOfBirth: string; // dd-mm-yyyy
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: IStudentBloodGroup;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  academicSemester: Types.ObjectId | IAcademicSemester;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
