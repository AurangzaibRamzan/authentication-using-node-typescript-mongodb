import UserModel from '../../models/user';


export default class UserController {
  model: any;

  constructor() {
    this.model = UserModel;
  }

  static loginUser(): boolean {
    console.log('loginUser');
    return true;
  }

  static signupUser(): boolean {
    console.log('signupUser');
    return true;
  }
}
