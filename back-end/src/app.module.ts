import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm";
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StadiumModule } from './stadium/stadium.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forRoot(),UserModule, ConfigModule.forRoot(),
    StadiumModule, 
    StadiumModule,],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule{
  constructor(private connection:Connection){}
}