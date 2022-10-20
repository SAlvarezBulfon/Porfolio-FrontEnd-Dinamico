import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { AgregarEducacionComponent } from './componentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectoComponent } from './componentes/agregar-proyecto/agregar-proyecto.component';
import { EditarAboutComponent } from './componentes/editar-about/editar-about.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { EducacionExperienciaComponent } from './componentes/educacion-experiencia/educacion-experiencia.component';
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
  {path: '', component: EducacionExperienciaComponent},
  {path: 'nuevo-estudio', component:AgregarEducacionComponent},
  {path: 'edit-estudio/:id', component:EditarEducacionComponent},
  {path: 'nueva-experiencia', component:AgregarExperienciaComponent},
  {path: 'edit-experiencia/:id', component:EditarExperienciaComponent},
  { path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
