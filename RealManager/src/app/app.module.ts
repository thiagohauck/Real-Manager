
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TesteComponent } from './pages/teste/teste.component';
import { OrdensComponent } from './pages/ordens/ordens.component';
import { GerenciamentoComponent } from './pages/gerenciamento/gerenciamento.component';
import { ApiserviceService } from './apiservice.service';
import { NovaordemComponent } from './pages/novaordem/novaordem.component';
import { NewpreventivaComponent } from './pages/newpreventiva/newpreventiva.component';
import { CargosComponent } from './pages/cargos/cargos.component';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos.component';
import { EquipamentosuperiorComponent } from './pages/equipamentosuperior/equipamentosuperior.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NivelComponent } from './pages/nivel/nivel.component';
import { EpiComponent } from './pages/epi/epi.component';
import { AndamentoComponent } from './pages/andamento/andamento.component';
import { AnaliseComponent } from './pages/analise/analise.component';
import { FechadasComponent } from './pages/fechadas/fechadas.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TesteComponent,
    OrdensComponent,
    GerenciamentoComponent,
    NovaordemComponent,
    NewpreventivaComponent,
    CargosComponent,
    EquipamentosComponent,
    EquipamentosuperiorComponent,
    UsuariosComponent,
    NivelComponent,
    EpiComponent,
    AndamentoComponent,
    AnaliseComponent,
    FechadasComponent,
    ComponentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
