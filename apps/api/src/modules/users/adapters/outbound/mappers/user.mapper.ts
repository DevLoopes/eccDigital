import { User } from '../../../domain/entities/user.entity.js';
import crypto from 'crypto';

export class UsersMapper {
  static toDomain(raw: any): User {
    return new User({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      createdAt: raw.createdAt,
    });
  }

  static toPersistence(user: User) {
    const passwordHash = user.password ? crypto.createHash('sha256').update(user.password).digest('hex') : '';
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password_hash: passwordHash,
      createdAt: user.createdAt,
    };
  }
}