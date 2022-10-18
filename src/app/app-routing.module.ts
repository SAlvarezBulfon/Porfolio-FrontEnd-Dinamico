import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { AgregarProyectoComponent } from './componentes/agregar-proyecto/agregar-proyecto.component';
import { EditarAboutComponent } from './componentes/editar-about/editar-about.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Proyecto } from './models/proyecto';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: '',  component: ProyectosComponent },
  { path: 'nuevo',  component: AgregarProyectoComponent },
  {path: 'editar/:id', component: EditarProyectosComponent },
  { path: '', component: AboutComponent},
  {path: 'editarAbout/:id', component: EditarAboutComponent},
  { path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
