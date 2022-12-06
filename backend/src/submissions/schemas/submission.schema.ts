import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubmissionDocument = Submission & Document;

@Schema({ timestamps: true })
export class Submission {
  @Prop({ required: true })
  studentId: string;

  @Prop({
    required: true,
    enum: ['Python', 'C++', 'C', 'Java'], // C++17, C99
  })
  language: string;

  @Prop({
    required: true,
  })
  code: string;

  @Prop({
    required: true,
  })
  problem: string;

  @Prop({
    required: true,
    default: 'QUEUED',
  })
  status: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
