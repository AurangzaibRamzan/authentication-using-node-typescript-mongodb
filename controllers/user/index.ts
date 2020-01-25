import _ from 'lodash';

import UserModel from '../../models/user';
import { createToken } from '../../utils/auth';

interface Result {
  data: any;
  error: string | null;
}

interface SignupArgsType {
  email: string;
  password: string;
}

interface LoginArgsType {
  email: string;
  password: string;
}

interface ChangePasswordType {
  userId: string;
  password: string;
  newPassword: string;
}

interface UserFuncType {
  userId: string;
}

async function signupUser(args: SignupArgsType): Promise<Result> {
  const { email, password } = args;
  const ifAlreadyExist = await UserModel.findOne({
    email,
  });
  if (ifAlreadyExist) {
    return {
      error: 'Email Already Exist',
      data: null,
    };
  }

  const user = await new UserModel({
    email,
    password,
  }).save();

  return {
    error: null,
    data: user,
  };
}

async function loginUser(args: LoginArgsType): Promise<Result> {
  const { email, password } = args;
  const user = await UserModel.findOne({
    email,
  });


  if (_.isEmpty(user)) {
    return {
      error: 'user_does_not_exist',
      data: null,
    };
  }
  const authenticateUser = await user.authenticate(password);

  if (!authenticateUser) {
    return {
      error: 'password_is_incorrect',
      data: null,
    };
  }

  const data = {
    token: createToken(user),
  };

  return {
    error: null,
    data,
  };
}

async function updatePassword(args: ChangePasswordType): Promise<Result> {
  const { userId, password, newPassword } = args;

  const user = await UserModel.findOne({
    _id: userId,
  });

  const authenticateUser = await user.authenticate(password);
  if (!authenticateUser) {
    return {
      error: 'password_is_incorrect',
      data: null,
    };
  }

  await UserModel.updateOne(
    {
      _id: userId,
    },
    {
      password: newPassword,
    },
  );

  return {
    error: null,
    data: user,
  };
}

async function user(args: UserFuncType): Promise<Result> {
  const { userId } = args;
  const user = await UserModel.findOne({
    _id: userId,
  }, { password: 0 });

  return {
    error: null,
    data: user,
  };
}


export default {
  loginUser,
  signupUser,
  updatePassword,
  user,
};
