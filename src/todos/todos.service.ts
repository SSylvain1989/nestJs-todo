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
    // récupérer le todo à mettre à jour  - ici le "+" permet de caster la string en number //

    let indexTodoUpdate: number;
    for (const indexTodoUpdate in this.todos) {
      if (this.todos[indexTodoUpdate].id === +id) {
        //rècupère les propriétés du todo envoyé
        const todoToUpdateKeys = Object.keys(todo);
        // remplace chaque propriété par sa mise à jour
        for (const todoToUpdateKey of todoToUpdateKeys) {
          this.todos[indexTodoUpdate][todoToUpdateKey] = todo[todoToUpdateKey];
        }
        return { updateToDo: 1, todo: this.todos[indexTodoUpdate] };
      }
    }

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
}
