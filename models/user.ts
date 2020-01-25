import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

interface EncryptPassword {
  (encryptPassword: string): Promise<string>;
}
interface Authenticate {
  (plainTextPassword: string): Promise<boolean>;
}

interface UserType extends mongoose.Document {
  usernname: string;
  password: string;
  encryptPassword: EncryptPassword;
  authenticate: Authenticate;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
    index: true,
  },
  password: {
    type: String,
  },
});

UserSchema.pre<UserType>('save', async function encrypt(next) {
  if (this.isModified('password')) {
    const hash = await this.encryptPassword(this.password);
    this.password = hash;
  }
  return next();
});


UserSchema.methods = {
  async authenticate(plainTextPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(plainTextPassword, this.password);
    } catch (err) {
      return false;
    }
  },
  encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8);
  },
};

export default mongoose.model<UserType>('User', UserSchema);
