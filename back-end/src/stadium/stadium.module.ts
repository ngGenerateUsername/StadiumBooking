import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StadiumController } from './stadium.controller';
import { StadiumService } from './stadium.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stadium } from './stadium.entity';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Stadium]),StadiumModule,],
  controllers: [
    StadiumController,],
  providers: [StadiumService,]
})
export class StadiumModule {
 
}
