import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // ici on indique qu'on souhaite une " instance de service " pour la variable appService de la part de AppService//
  constructor(private readonly appService: AppService) {}

  // le @est un décorateur en typescript, ici on attend une requete GET , qui va nous renvoyer une string//
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
