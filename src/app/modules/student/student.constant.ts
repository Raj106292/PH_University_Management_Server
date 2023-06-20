import { IStudentBloodGroup, IStudentGender } from './student.interface';

export const studentGender: IStudentGender[] = ['male', 'female'];
export const studentBloodGroup: IStudentBloodGroup[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'O+',
  'O-',
  'AB+',
  'AB-',
];

export const studentSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.lastName',
  'bloodGroup',
];
export const studentFilterableFields = [
  'searchTerm',
  'id',
  'email',
  'bloodGroup',
  'contactNo',
  'emergencyContactNo',
];
