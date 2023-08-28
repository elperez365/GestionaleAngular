import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PreparazioneGareComponent } from './pages/preparazione-gare/preparazione-gare.component';
import { ElencoGareComponent } from './pages/preparazione-gare/elenco-gare/elenco-gare.component';
import { NuovaGaraComponent } from './pages/preparazione-gare/nuova-gara/nuova-gara.component';
import { AppaltiAggiudicatiComponent } from './pages/appalti-aggiudicati/appalti-aggiudicati.component';
import { ElencoOperaiComponent } from './pages/operai/elenco-operai/elenco-operai.component';
import { NuovoOperaioComponent } from './pages/operai/nuovo-operaio/nuovo-operaio.component';
import { ImpreseAppaltantiComponent } from './pages/imprese-appaltanti/imprese-appaltanti.component';
import { NuovaImpresaComponent } from './pages/imprese-appaltanti/nuova-impresa/nuova-impresa.component';
import { ElencoImpreseComponent } from './pages/imprese-appaltanti/elenco-imprese/elenco-imprese.component';
import { ImpostazioniComponent } from './pages/impostazioni/impostazioni.component';
import { NuovoMezzoComponent } from './pages/mezzi/nuovo-mezzo/nuovo-mezzo.component';
import { ElencoMezziComponent } from './pages/mezzi/elenco-mezzi/elenco-mezzi.component';
import { PaginaDettaglioComponent } from './components/pagina-dettaglio/pagina-dettaglio.component';
import { AppErrorComponent } from './components/error/error.component';
import { ModificaImpresaComponent } from './pages/imprese-appaltanti/modifica-impresa/modifica-impresa.component';
import { ModificaMezzoComponent } from './pages/mezzi/modifica-mezzo/modifica-mezzo.component';
import { ModificaOperaioComponent } from './pages/operai/modifica-operaio/modifica-operaio.component';
import { ModificaGaraComponent } from './pages/preparazione-gare/modifica-gara/modifica-gara.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './services/shared/auth.guard';

const routes: Routes = [
  // ===== Accessible Pages with no token =============
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  // ===== Private Pages, JWT required =============
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'calendario',
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gare',
    component: PreparazioneGareComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gare_elenco',
    component: ElencoGareComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gare_nuovo',
    component: ModificaGaraComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appalti',
    component: AppaltiAggiudicatiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'operai_elenco',
    component: ElencoOperaiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'operai_form',
    component: NuovoOperaioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'operai_form/:id',
    component: NuovoOperaioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mezzi_elenco',
    component: ElencoMezziComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mezzi_nuovo',
    component: ModificaMezzoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'imprese',
    component: ImpreseAppaltantiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'imprese_nuovo',
    component: ModificaImpresaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'imprese_elenco',
    component: ElencoImpreseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'impostazioni',
    component: ImpostazioniComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dettaglio/:cat/:id',
    component: PaginaDettaglioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modifica_impreseAppaltanti/:cat/:id',
    component: ModificaImpresaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modifica_mezzi/:cat/:id',
    component: ModificaMezzoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modifica_operai/:cat/:id',
    component: ModificaOperaioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modifica_gara/:cat/:id',
    component: ModificaGaraComponent,
    canActivate: [AuthGuard],
  },
  // ================ 404 Page =================
  { path: '404', component: AppErrorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
