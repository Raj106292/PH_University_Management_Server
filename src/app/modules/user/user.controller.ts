import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './users.service';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    next();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully',
      data: result,
    });
    // res.status(200).json({
    //   success: true,
    //   message: 'user created successfully',
    //   data: result,
    // });
  }
);

export const UserController = {
  createUser,
};
