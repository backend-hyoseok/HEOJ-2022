import { IsNotEmpty, IsIn, IsByteLength } from 'class-validator';

export class CreateSubmissionDTO {
  @IsIn(['Python', 'C++', 'C', 'Java'], {
    message: '지원하지 않는 언어입니다.',
  })
  @IsNotEmpty()
  language: string;

  @IsByteLength(0, 65536, { message: '코드 길이 제한은 64KB 입니다.' })
  code: string;

  @IsIn(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
  problem: string;
}
