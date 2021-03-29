import { Injectable } from '@nestjs/common';

@Injectable()
// ici grace à Injectable on souhaite faire d'une class un service//
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
