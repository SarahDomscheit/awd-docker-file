import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async createUser(dto: UserCreateDto): Promise<Users> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = this.usersRepository.create({
      ...dto,
      password: hashedPassword,
    });
    return await this.usersRepository.save(newUser);
  }
}
