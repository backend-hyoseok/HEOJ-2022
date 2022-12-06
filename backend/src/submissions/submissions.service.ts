import { SqsService } from '@nestjs-packages/sqs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubmissionDTO } from './dtos/create-submission.dto';
import { SubmissionListDTO } from './dtos/submission-list.dto';
import { Submission, SubmissionDocument } from './schemas/submission.schema';

interface SqsBody {
  id: string;
}

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name)
    private submissionModel: Model<SubmissionDocument>,
    private readonly sqsService: SqsService,
  ) {}

  async create(studentId: string, createSubmissionDTO: CreateSubmissionDTO) {
    const createdSubmission = new this.submissionModel({
      studentId: studentId,
      ...createSubmissionDTO,
    });

    const savedSubmission = await createdSubmission.save();

    await this.sqsService.send<SqsBody>('heoj-judge-queue.fifo', {
      id: savedSubmission._id.toString(),
      body: {
        id: savedSubmission._id.toString(),
      },
      groupId: 'submission',
    });
  }

  async findAll(studentId: string, submissionListDTO: SubmissionListDTO) {
    const submissions = await this.submissionModel.find(
      { studentId: studentId },
      { problem: true, status: true, createdAt: true, language: true },
      {
        skip: (submissionListDTO.page - 1) * 20,
        limit: 20,
        sort: { $natural: -1 },
      },
    );

    return submissions;
  }

  async findOneResult(id: string, studentId: string) {
    const submission = await this.submissionModel.findById(id, {
      status: true,
      studentId: true,
    });

    if (!submission || submission.studentId !== studentId)
      throw new NotFoundException();

    return submission;
  }

  async findOne(id: string, studentId: string) {
    const submission = await this.submissionModel
      .find({ studentId: studentId })
      .findById(id);

    if (!submission) throw new NotFoundException();

    return submission;
  }

  async statistics(studentId: string) {
    const submissions = await this.submissionModel.find(
      {
        studentId: studentId,
      },
      { status: true, problem: true },
    );

    const stat: Record<string, string> = {
      A: 'None',
      B: 'None',
      C: 'None',
      D: 'None',
      E: 'None',
      F: 'None',
      G: 'None',
      H: 'None',
      I: 'None',
    };

    for (const submission of submissions) {
      if (submission.status === 'AC') stat[submission.problem] = 'AC';
      else if (
        submission.status !== 'QUEUED' &&
        stat[submission.problem] === 'None'
      )
        stat[submission.problem] = 'WA';
    }

    return stat;
  }
}
