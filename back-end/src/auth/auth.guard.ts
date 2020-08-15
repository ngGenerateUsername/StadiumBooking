import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';


import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthGuard implements CanActivate {

  
  async canActivate(
    context: ExecutionContext,
  ): Promise<any> {

    const request = context.switchToHttp().getRequest();
   
      if (!request.headers.authorization) {
        throw new HttpException("Authorization issue!",HttpStatus.UNAUTHORIZED);
      }
      const decode = await this.validateToken(request.headers.authorization);   
     
      return decode;
    
}

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      
    }
    const token = auth.split(' ')[1];

    try {
      const decoded: any = await jwt.verify(token, process.env.SECRET);
      return decoded
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
     
    }
  }
}
