import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubmissionsModule } from './submissions/submissions.module';
import { SqsConfig, SqsConfigOption, SqsModule } from '@nestjs-packages/sqs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SqsModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const config: SqsConfigOption = {
          region: configService.getOrThrow('AWS_SQS_REGION'),
          endpoint: configService.getOrThrow('AWS_SQS_ENDPOINT'),
          accountNumber: configService.getOrThrow('AWS_SQS_ACCOUNTNUMBER'),
          credentials: {
            accessKeyId: configService.getOrThrow('AWS_SQS_ACCESSKEYID'),
            secretAccessKey: configService.getOrThrow(
              'AWS_SQS_SECRETACCESSKEY',
            ),
          },
        };
        return new SqsConfig(config);
      },
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get('mongoDB'),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    SubmissionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
