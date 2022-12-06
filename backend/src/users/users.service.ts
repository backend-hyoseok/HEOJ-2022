import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const KEY = '';

    if (KEY !== createUserDTO.key)
      throw new BadRequestException({ message: 'error' });

    const duplicatedStudentId = await this.userModel
      .exists({
        studentId: createUserDTO.studentId,
      })
      .exec();

    if (duplicatedStudentId)
      throw new BadRequestException({
        studentId: '이미 존재하는 학번입니다.',
      });

    createUserDTO.password = await bcrypt.hash(createUserDTO.password, 10);

    const createdUser = new this.userModel(createUserDTO);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneByStudentId(studentId: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ studentId: studentId }).exec();
  }
}
