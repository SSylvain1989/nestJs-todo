//**** on creer un module qui comporte un controller et un service****//
// pour chaque fonctionnalitées on aura un module et son service //

// un module par "gestion" , comme un composant en react : un module user , un module produit , un module fournisseur ... //
// un module aura un controller et un service //
import { Module } from '@nestjs/common';
// controller permet d'écouteur les requetes entrante et renvoyer une réponse //
import { AppController } from './app.controller';
// il fournit des fonctionnalitées au controller //
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
