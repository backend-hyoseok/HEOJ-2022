import { Module } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { SubmissionsController } from './submissions.controller';
import { Submission, SubmissionSchema } from './schemas/submission.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SqsModule, SqsQueueType } from '@nestjs-packages/sqs';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Submission.name, schema: SubmissionSchema },
    ]),
    SqsModule.registerQueue({
      name: 'heoj-judge-queue.fifo',
      type: SqsQueueType.Producer,
    }),
  ],
  providers: [SubmissionsService],
  controllers: [SubmissionsController],
})
export class SubmissionsModule {}
