import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() dto: UserCreateDto) {
    return this.usersService.createUser(dto);
  }
}
