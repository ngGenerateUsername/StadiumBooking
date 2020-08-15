import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt = require('bcrypt');

import * as jwt from 'jsonwebtoken';

@Entity()
export class User
{
   
    @PrimaryGeneratedColumn()
     id: BigInt;  

    @Column({ 
        type: 'varchar', 
        nullable: false, 
        unique: true 
    }) 
    username: String;
    @Column({ 
        type: 'varchar', 
        nullable: false 
    }) 
    password: String;  
    @Column({ 
        type: 'varchar', 
        nullable: false 
    }) 
    
    email: String;

    public get Token() :String
    {
        const {id,username} = this;
        return  jwt.sign({
            id,
            username,
        },process.env.SECRET,{ expiresIn: '23d' });
    }

}