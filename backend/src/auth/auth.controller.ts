import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDTO: LoginDTO, @Res() response: Response) {
    const { name, value, cookieOptions } = await this.authService.login(
      loginDTO,
    );

    response.cookie(name, value, cookieOptions);
    response.send();
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Res() response: Response) {
    const { name, value, cookieOptions } = await this.authService.logout();

    response.cookie(name, value, cookieOptions);
    response.send();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Req() request: Request, @Res() response: Response) {
    response.send({ studentId: request.user.studentId });
  }
}
