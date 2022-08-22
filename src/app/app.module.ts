import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditarHeroComponent } from './componentes/editar-hero/editar-hero.component';
import { EditarAboutComponent } from './componentes/editar-about/editar-about.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { EditarSkillsComponent } from './componentes/editar-skills/editar-skills.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducacionExperienciaComponent } from './componentes/educacion-experiencia/educacion-experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    EditarHeroComponent,
    EditarAboutComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarProyectosComponent,
    EditarSkillsComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducacionExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
