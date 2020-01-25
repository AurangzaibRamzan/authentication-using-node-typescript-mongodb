import jwt from 'jsonwebtoken';
import { get } from 'lodash';

import { AuthToken } from '../config';

interface User {
  _id: string;
}

export function createToken(user: User): string {
  const { _id: id } = user;
  return jwt.sign({ id }, AuthToken, {
    expiresIn: 86400, // expires in 24 hours
  });
}

export function verifyToken(req: any, res: any, next: any): void {
  const { token } = req.headers;
  if (!token) {
    res.status(403).send({ auth: false, message: 'No token provided.' });
    return;
  }
  // verifies secret and checks exp
  jwt.verify(token, AuthToken, (error: any, decoded: string | object) => {
    if (error) {
      res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      return;
    }
    req.userId = get(decoded, 'id');
    next();
  });
}
