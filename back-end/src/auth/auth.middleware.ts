import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';

@Injectable()
export class AuthMiddleware implements NestMiddleware {


  constructor(private jwt:JwtService){}
  async use(req: any, res: any, next: () => void) {

    
    try{
      const headerAuth = req.headers['authorization'];
      const auth = headerAuth.split(' ');
      var token = auth[1];
      const decode = this.jwt.decode(token);
    }catch(e)
    {
      return {eurror : "famma 7aja cv Pas ya frr !"};
    }

    let validation  = await this.jwt.verify(token);
    if(!validation)
    {
      throw new HttpException('Access Denied!',HttpStatus.UNAUTHORIZED);
    }
    next();
  }
}
