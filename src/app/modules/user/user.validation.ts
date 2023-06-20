import { z } from 'zod';
import { studentBloodGroup, studentGender } from '../student/student.constant';

// req validation
// body contains -> object type data
// the type of the data of body also -> object

const createStudentZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    student: z.object({
      name: z.object({
        firstName: z.string({ required_error: 'First name is required' }),
        middleName: z.string().optional(),
        lastName: z.string({ required_error: 'Last name is required' }),
      }),
      dateOfBirth: z.string({ required_error: 'Date of birth is required' }),
      gender: z.enum([...studentGender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      bloodGroup: z
        .enum([...studentBloodGroup] as [string, ...string[]])
        .optional(),
      email: z.string({ required_error: 'Email is required' }),
      contactNo: z.string({ required_error: 'Contact Number is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact Number is required',
      }),
      presentAddress: z.string({
        required_error: 'Present Address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent Address is required',
      }),
      guardian: z.object({
        fatherName: z.string({ required_error: 'Father Name is Required' }),
        fatherOccupation: z.string({
          required_error: 'Father Occupation is Required',
        }),
        fatherContactNo: z.string({
          required_error: 'Father Contact Number is Required',
        }),
        motherName: z.string({ required_error: 'Mother Name is Required' }),
        motherOccupation: z.string({
          required_error: 'Mother Occupation is Required',
        }),
        motherContactNo: z.string({
          required_error: 'Mother Contact No is Required',
        }),
        address: z.string({ required_error: 'Guardian Address is Required' }),
      }),
      localGuardian: z.object({
        name: z.string({ required_error: 'Local Guardian Name is Required' }),
        occupation: z.string({
          required_error: 'Local Guardian Occupation is Required',
        }),
        contactNo: z.string({
          required_error: 'Local Guardian Contact Number is required',
        }),
        relation: z.string({
          required_error: 'Relation with Local Guardian is required',
        }),
        address: z.string({
          required_error: 'Local Guardian Address is Required',
        }),
      }),
      profileImage: z.string().optional(),
      academicSemester: z.string({
        required_error: 'Academic Semester is required',
      }),
      academicDepartment: z.string({
        required_error: 'Academic Department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic Faculty is required',
      }),
    }),
  }),
});

export const UserValidation = {
  createStudentZodSchema,
};
