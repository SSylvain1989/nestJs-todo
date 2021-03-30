import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

// le fait que le controller est en argument/parametre , 'todos' , il sait qu'il doit écouter les requetes en http://localhost:3000/todos //
@Controller('todos')
export class TodosController {
  // avec constructor on fournit une instance de TodosService , private readonly : parce qu'on va modifier son import une fois initialisé//
  // grace à ça on peut utiliser notre service TodosService ici //import { CreateTodoDto } from './dto/create-todo.dto';

  constructor(private readonly todosService: TodosService) {}

  // ici comme sur express on met ":" ( deux points) ça permet de faire un url avec un slug //
  @Get(':id')
  // Param prend en argument uniquement ce que l'on souhaite recupérer , si on veut tout récupérer , on laisse à vide//
  // pour rappel le controller lui ne fait qu'écouter , mais ceqzzzzzssss²²²lui qui va retourner l'information cherchée , c'est le service , chacun son job//
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  // ici findAll va nous retourner une promesse d'un tableau de quelque chose //
  @Get()
  findAll(): Todo[] {
    // le controller son taff c'est pas de retourner l'info , c'est le service qui doit retourner l'info donc on créée un service//
    // cette methode findAll est charger d'écouter les requetes GET puisqu'on est dans un controller + methode décoré avec @GET//

    return this.todosService.findAll();
  }

  // ici on est en Post .. on connait , le décorateur @Body lui , permet de recupérer le body de la requete tout simplement, équivalent de body parser d'express
  // et on rajoute l'argument "newTodo//
  // pour rappel le controller lui ne fait qu'écouter , mais celui qui va ajouter , c'est le service , chacun son job//
  // createTodoDto ici sert à dire " tu vas recevoir / envoyer un tableau / une donnée , de cette forme , cf le fichier create-todo.dto.dts"
  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    this.todosService.create(newTodo);
  }

  // pour rappel le controller lui ne fait qu'écouter , mais celui qui va ajouter , c'est le service , chacun son job//

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todosService.update(id, todo);
  }

  // on écoute sur todos/id //
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
