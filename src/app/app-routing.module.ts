import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProyectoComponent } from './componentes/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Proyecto } from './models/proyecto';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: '',  component: ProyectosComponent },
  { path: 'nuevo',  component: AgregarProyectoComponent },
  {path: 'editar/:id', component: EditarProyectosComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
