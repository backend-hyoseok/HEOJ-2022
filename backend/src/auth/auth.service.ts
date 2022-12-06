import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dtos/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO): Promise<JWTAuthCookie> {
    const { studentId, password } = loginDTO;
    const user = await this.usersService.findOneByStudentId(studentId);
    if (!user) {
      throw new BadRequestException({
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (isCorrectPassword) {
      const jwtPayload = { studentId: studentId };
      const token = this.jwtService.sign(jwtPayload);
      return {
        name: 'Authentication',
        value: token,
        cookieOptions: {
          maxAge:
            this.configService.get<number>('JWT_EXPIRATION_TIME', 2678400) *
            1000,
          httpOnly: true,
          path: '/',
          sameSite: 'strict',
        },
      };
    } else {
      throw new BadRequestException({
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }
  }

  async logout(): Promise<JWTAuthCookie> {
    return {
      name: 'Authentication',
      value: '',
      cookieOptions: {
        httpOnly: true,
        path: '/',
        maxAge: 0,
        sameSite: 'strict',
      },
    };
  }
}
