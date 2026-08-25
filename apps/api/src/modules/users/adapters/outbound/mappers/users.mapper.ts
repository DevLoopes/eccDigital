import { User } from '../../../domain/entities/users.entity.js';

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
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}