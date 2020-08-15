import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm";
import { IsNotEmpty, IsMilitaryTime } from 'class-validator';

@Entity()
export class Stadium
{
    @PrimaryGeneratedColumn()
     id: BigInt;  

     @IsNotEmpty()
    @Column({ 
        type: 'varchar', 
        nullable: false,  
    }) 
    sport:string;

    @IsNotEmpty()
    @Column({ 
        type: 'int', 
        nullable: false 
    }) 
    MinPlayer: number;  
    
    @IsNotEmpty()
    @Column({ 
        type: 'int', 
        nullable: false 
    }) 
    MaxPlayer: number; 

    @IsNotEmpty()
    @Column({ 
        type: 'float', 
        nullable: false 
    }) 
    price:Double;

    @IsNotEmpty()
    @IsMilitaryTime()
    @Column({ 
        type: 'time', 
        nullable: false 
    }) 
    openHeure:string;

    @IsNotEmpty()
    @IsMilitaryTime()
    @Column({ 
        type: 'time', 
        nullable: false 
    }) 
    closeHeure:string;
    
    @IsNotEmpty()
    @Column({ 
        type: 'int', 
        nullable: false 
    }) 
    surface:number;
}