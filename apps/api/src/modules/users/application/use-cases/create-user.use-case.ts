import { IUsersRepository } from "../../domain/repositories/users.repository.js";
import { User } from "../../domain/entities/users.entity.js";
import type { CreateUserDTO } from "../../domain/repositories/users.repository.js";

type Input = CreateUserDTO;
type Output = User;

export class CreateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(input: Input): Promise<Output> {
        const user = new User({ name: input.name, email: input.email, password: input.password });
        return this.usersRepository.create(user);
    }
}