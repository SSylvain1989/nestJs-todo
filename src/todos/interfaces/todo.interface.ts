// une interface permet de décrire ce que doit comporter un objet, ici l'objet todo doit comporter un id un titre une description //

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  description?: string;
}

//le ? permet de spécifier que ce n'est pas obligatoire , donc ici la description n'est pas obligatoire //
