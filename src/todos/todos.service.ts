import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  // le Todo en vert sert à typer "todos" et de lui dire qu'on va annoncer un tableau de Todo //
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'Create NextJs todos app',
      done: false,
    },
    {
      id: 2,
      title: 'bread',
      description: 'buy bread',
      done: true,
    },
    {
      id: 3,
      title: 'cheese',
      description: 'buy cheese',
      done: true,
    },
    {
      id: 4,
      title: 'wine',
      description: 'buy wine',
      done: true,
    },
  ];
  findOne(id: string) {
    return this.todos.find((todo) => todo.id === Number(id));
  }

  findAll(): Todo[] {
    //ici pareil on type ce que va nous retourner findAll avec Todo[]//
    return this.todos;
  }
  create(todo: CreateTodoDto) {
    // ici on passe à todos ligne 7 tout notre tableau à l'identique et on rajoute un todo//
    this.todos = [...this.todos, todo];
  }

  update(id: string, todo: CreateTodoDto) {
    // on cherche l'index sur lequel on va faire la modification , donc on va boucler jusqu'à tomber sur l'index concerné //
    for (const indexTodoUpdate in this.todos) {
      console.log('indexTodoUpdate', indexTodoUpdate);

      // litéralement , si pour l'itération en cours dans le tableau de todos , le todos.id est égale à l'id en parametre de update alors on arrête la boucle et ... //
      if (this.todos[indexTodoUpdate].id === +id) {
        //tu stocks dans todoToUpdateKeys toutes les clés de chaque objet todo itéré et rècupère les propriétés/clés du todo envoyé //
        const todoToUpdateKeys = Object.keys(todo);
        console.log('todoToUpdateKeys', todoToUpdateKeys);
        // remplace chaque propriété par sa mise à jour
        for (const todoToUpdateKey of todoToUpdateKeys) {
          console.log('todoToUpdateKey', todoToUpdateKey);
          // output : quel est la propriété concerné par la mise à jour

          this.todos[indexTodoUpdate][todoToUpdateKey] = todo[todoToUpdateKey];
          console.log(
            'this.todos[indexTodoUpdate]',
            this.todos[indexTodoUpdate],
            // output : l'objet concerné par l'update //
          );
          console.log(
            'this.todos[indexTodoUpdate][todoToUpdateKey]',
            this.todos[indexTodoUpdate][todoToUpdateKey],
            // output : la valeur de l'update //
          );
        }
        return { updateToDo: 1, todo: this.todos[indexTodoUpdate] };
      }
    }

    // récupérer le todo à mettre à jour avec l'id  - ici le "+" permet de caster la string en number //
    // const todoToUpdate = this.todos.find((todo) => todo.id === +id);
    // if (!todoToUpdate) return new NotFoundException("cette todo n'existe pas");
    // // appliquer l'update
    // if (todo.hasOwnProperty) {
    //   todoToUpdate.done = todo.done;
    // }
    // if (todo.title) {
    //   todoToUpdate.title = todo.title;
    // }
    // if (todo.description) {
    //   todoToUpdate.description = todo.description;
    // }
    // const updateTodos = this.todos.map((todo) =>
    //   todo.id !== +id ? todo : todoToUpdate,
    // );
    // this.todos = [...updateTodos];
    // return { updateTodo: 1, todo: todoToUpdate};
  }
  // delete(id: string, todo: CreateTodoDto) {
  //   for (const indexTodoUpdate in this.todos) {
  //     console.log('indexTodoUpdate', indexTodoUpdate);
  //     if (this.todos[indexTodoUpdate].id === +id) {
  //       this.todos = this.todos.splice(+indexTodoUpdate);
  //     }
  //   }
  // }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    // filter va créer un nouveau tableau avec tous les id sauf celui qui correspond à l'id de la requete//
    this.todos = this.todos.filter((todo) => todo.id !== +id);
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
