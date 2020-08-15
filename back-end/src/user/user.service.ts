import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from './user.entity';
import { Repository } from "typeorm";
import bcrypt = require("bcrypt");
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    

    constructor(  @InjectRepository(User)
    private usersRepository : Repository<User>,
   
    ){}





        async LogIn(username:String , password:String)
        {
            const User:User = await this.usersRepository.findOne({username:username});
            if(!User)
            {
                throw new HttpException('username not found !  ',HttpStatus.NOT_FOUND); //404
            }
            if(! await bcrypt.compare(password.toString(),User.password.toString()))
            {
                throw new HttpException('password is wrong!', HttpStatus.UNAUTHORIZED); //401
            }
            const payload = {Id_sub: User.id , username : username};
            return {
                username:username,
                email:User.email,
                token : User.Token
            }
        }



    CreateAdmin(user:User)
    {
        this.usersRepository.insert(user);
    }
}
