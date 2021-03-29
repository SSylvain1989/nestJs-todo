import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

// ce décorateur permet de faire de la class TodosModule un module //
// c'est pas le module qui va écouteur la requete , c'est le controller qui va écouter la requete et fournir la réponse, ici le TodosController //
@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
