import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class SubmissionListDTO {
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 })
  @Min(1)
  @Type(() => Number)
  page: number;
}
