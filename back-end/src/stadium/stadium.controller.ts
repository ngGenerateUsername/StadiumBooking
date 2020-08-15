import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { StadiumService } from './stadium.service';
import { get } from 'http';
import { MiddlewareBuilder } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { Stadium } from './stadium.entity';

@Controller('stadium')
export class StadiumController {

    constructor(private dataStadium:StadiumService){}


    @Get()
    // @UseGuards(new AuthGuard())
    getAll()
    {
        return this.dataStadium.getAll();
    }


    @Post('create')
    PostStadium(@Body()stadium:Stadium)
    {
        return this.dataStadium.create(stadium);
    }



    // @Get('create')
    // createStadium()
    // {
    //     return this.dataStadium.createFistStadium();
    // }

}
