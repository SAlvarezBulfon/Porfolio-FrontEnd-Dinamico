import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  {path: 'editar/:id', component: EditarProyectosComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
