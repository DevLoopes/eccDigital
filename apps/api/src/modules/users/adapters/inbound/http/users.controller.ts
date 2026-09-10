import { Router, type Request, type Response } from 'express';
import { UsersService } from '../../../domain/services/users.service.js';
import { createUserDto } from './get-users.dto.js';

export class UsersController {
  public router = Router();

  constructor(private readonly usersService: UsersService) {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get('/', this.getUsers.bind(this));
    this.router.post('/', this.createUser.bind(this));
  }

  private async getUsers(req: Request, res: Response) {
    const users = await this.usersService.findAll();
    res.json(users);
  }

  private async createUser(req: Request, res: Response) {
    const body = createUserDto.parse(req.body);
    const user = await this.usersService.registerUser(body);
    res.status(201).json(user);
  }
}