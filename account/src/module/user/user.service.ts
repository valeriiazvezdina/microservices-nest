import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as argon from 'argon2';
import * as crypto from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';
import GetUsersFilterDto from './dto/get-users-filter.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto): Promise<{
    firstName: string;
    lastName: string;
    phone: string;
    login: string;
  }> {
    const isExist = await this.userRepository.checkExistUser({
      phone: user.phone,
      login: user.login,
    });

    if (isExist) {
      throw new ConflictException('User already exist');
    }

    const salt = crypto.randomBytes(32);
    const hash = await argon.hash(user.password, { salt });

    const newUser = await this.userRepository.createUser({
      passwordHash: hash,
      passwordSalt: salt.toString('hex'),
      ...user,
    });

    return {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
      login: newUser.login,
    };
  }

  async findAll(getUserFilterDto: GetUsersFilterDto): Promise<{
    items: UserDto[];
    total: number;
  }> {
    const { items: users, total } =
      await this.userRepository.findAndCount(getUserFilterDto);

    const dtos = users.map((user) => new UserDto(user));

    return { items: dtos, total };
  }

  async findOne(id: string) {
    return this.userRepository.findBy(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser({
      userId: id,
      ...updateUserDto,
    });
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }

  async verification({ login, password }: SignInDto): Promise<boolean> {
    const user = await this.userRepository.findByLogin(login);

    if (!user) throw new NotFoundException('User not found');

    return argon.verify(password, user.passwordHash);
  }
}
