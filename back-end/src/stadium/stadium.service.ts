import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stadium } from './stadium.entity';
import { ValidationError } from 'class-validator';

@Injectable()
export class StadiumService {

    constructor(
        @InjectRepository(Stadium)
        private StadiumRepository:Repository<Stadium>
    ){ }

    getAll()
    {
        return this.StadiumRepository.find();
    }


    create(stadium:Stadium)
    {
        try {
           const creation = this.StadiumRepository.create(stadium);
           const save = this.StadiumRepository.save(creation);
           if(save)
           {
               return {
                   success:"Stadium Created Successfully"
               }
           }
        } catch (error) {
            throw new HttpException('something is wrong !',HttpStatus.UNAUTHORIZED);
        }
       
    }
    


    // async   createFistStadium()
    // {
    //     const stadium:Stadium = {
    //         id:undefined,
    //         capacity:2,
    //         sport:'tennis'
    //     }

      
    //     try{
     
    //         const CreateStadium =await this.StadiumRepository.save(stadium);
    //     }catch(e)
    //     {
    //         throw new  HttpException('somthing is wrong!',HttpStatus.NOT_ACCEPTABLE);
    //     }
    
    // }
}
