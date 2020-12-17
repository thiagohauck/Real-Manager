import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TesteComponent } from './pages/teste/teste.component';
import { OrdensComponent } from './pages/ordens/ordens.component';
import { GerenciamentoComponent } from './pages/gerenciamento/gerenciamento.component';
import { NovaordemComponent } from './pages/novaordem/novaordem.component';
import { NewpreventivaComponent } from './pages/newpreventiva/newpreventiva.component';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos.component';
import { EquipamentosuperiorComponent } from './pages/equipamentosuperior/equipamentosuperior.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NivelComponent } from './pages/nivel/nivel.component';
import { EpiComponent } from './pages/epi/epi.component';
import { AndamentoComponent } from './pages/andamento/andamento.component';
import { AnaliseComponent } from './pages/analise/analise.component';
import { FechadasComponent } from './pages/fechadas/fechadas.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';

const routes: Routes = [
  {path: '', component: TesteComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'ordens', component: OrdensComponent},
    {path: 'gerenciamento', component: GerenciamentoComponent},
    {path: 'novaordem', component: NovaordemComponent},
    {path: 'neworder', component: NewpreventivaComponent},
    {path: 'equipamentos', component: EquipamentosComponent},
    {path: 'equipamentosuperior', component: EquipamentosuperiorComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'nivel', component: NivelComponent},
    {path: 'epi', component: EpiComponent},
    {path: 'andamento', component: AndamentoComponent},
    {path: 'analise', component: AnaliseComponent},
    {path: 'fechadas', component: FechadasComponent},
    {path: 'componentes', component: ComponentesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
