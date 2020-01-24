import UserModel from '../../models/user';

interface SignupArgsType {
  email: string;
  password: string;
}

export default class UserController {
  model: any;

  constructor() {
    this.model = UserModel;
  }

  static loginUser(): boolean {
    console.log('loginUser');
    return true;
  }

  static signupUser(args: SignupArgsType): boolean {
    if (!args) return false;
    const { email, password } = args;
    console.log(email, password);
    return true;
  }
}
