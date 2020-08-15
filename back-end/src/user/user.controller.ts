import { Controller, Get, Param, Post, Body,Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import bcrypt = require("bcrypt");

@Controller('user')
export class UserController {

    constructor(private UserData:UserService){}


    @Post('login')
    login(@Body() User:User)
    {
        return  this.UserData.LogIn(User.username,User.password);
       
    }






    @Get()
    getMeassage()
    {
        return "Hello world! ";
    }




//Hedhi 5atia sta3maltha just bech najouti admin jdid ctt so matrakkazch m3iha si zembabwey
    // @Get('create')
    // async CreateUserAdmin()
    // {
    //     const compte:User = {
    //         id: undefined,
    //         email:"mebnhamouda099@gmail.com",
    //         username:"userAdmin",
    //         password: await bcrypt.hash("admin",10),
    //         Token:undefined,
    //     };
      
     
    //    return this.UserData.CreateAdmin(compte);
    // }
}
