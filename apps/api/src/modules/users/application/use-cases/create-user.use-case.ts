import { IUsersRepository, DbError } from "../../domain/repositories/users.repository.js";
import { User } from "../../domain/entities/users.entity.js";
import type { CreateUserDTO } from "../../domain/repositories/users.repository.js";
import { Result, ok, err } from '../../../../infra/common/utils/result.js';

type Input = CreateUserDTO;

export class CreateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(input: Input): Promise<Result<User, DbError>> {
        const user = new User({ name: input.name, email: input.email, password: input.password });
        const result = await this.usersRepository.create(user);
        return result;
    }
}