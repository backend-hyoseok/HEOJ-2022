import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSubmissionDTO } from './dtos/create-submission.dto';
import { SubmissionsService } from './submissions.service';
import { Request } from 'express';
import { SubmissionListDTO } from './dtos/submission-list.dto';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  craete(
    @Req() request: Request,
    @Body() createSubmissionDTO: CreateSubmissionDTO,
  ) {
    return this.submissionsService.create(
      request.user.studentId,
      createSubmissionDTO,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(
    @Req() request: Request,
    @Query() submissionListDTO: SubmissionListDTO,
  ) {
    return this.submissionsService.findAll(
      request.user.studentId,
      submissionListDTO,
    );
  }

  @Get('/statistics')
  @UseGuards(JwtAuthGuard)
  statistics(@Req() request: Request) {
    return this.submissionsService.statistics(request.user.studentId);
  }

  @Get('/:id/status')
  @UseGuards(JwtAuthGuard)
  findOneResult(@Req() request: Request, @Param('id') id: string) {
    return this.submissionsService.findOneResult(id, request.user.studentId);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Req() request: Request, @Param('id') id: string) {
    return this.submissionsService.findOne(id, request.user.studentId);
  }
}
