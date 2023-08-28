import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PreparazioneGareComponent } from './pages/preparazione-gare/preparazione-gare.component';
import { ElencoGareComponent } from './pages/preparazione-gare/elenco-gare/elenco-gare.component';

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
import { ModificaGaraComponent } from './pages/preparazione-gare/nuova-modifica-gara/modifica-gara.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './services/shared/auth.guard';

const routes: Routes = [
  // ===== Accessible Pages with no token =============
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  // ===== Private Pages, JWT required =============
     // ===== Home page =============
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
      // ===== Calendar page =============
  {
    path: 'calendario',
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },
      // ===== Gare page =============
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
    path: 'gara_form',
    component: ModificaGaraComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gara_form/:id',
    component: ModificaGaraComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'dettaglio/:cat/:id',
  //   component: DettaglioComponent
  // },
      // ===== Appalti page =============
  {
    path: 'appalti',
    component: AppaltiAggiudicatiComponent,
    canActivate: [AuthGuard],
  },
      // ===== Operai page =============
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

      // ===== ;Mezzi page =============
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
    path: 'mezzi_form/:id',
    component: ModificaMezzoComponent,
    canActivate: [AuthGuard],
  },
      // ===== Imprese page =============
  {
    path: 'imprese',
    component: ImpreseAppaltantiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'imprese_elenco',
    component: ElencoImpreseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'impreseAppaltanti_form',
    component: ModificaImpresaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'impreseAppaltanti_form/:id',
    component: ModificaImpresaComponent,
    canActivate: [AuthGuard],
  },
        // ===== Impostazioni page  =============
  {
    path: 'impostazioni',
    component: ImpostazioniComponent,
    canActivate: [AuthGuard],
  },
      // ===== Pagine condivise  =============
  {
    path: 'dettaglio/:cat/:id',
    component: PaginaDettaglioComponent,
    canActivate: [AuthGuard],
  },

  // ================ 404 Page =================
  // { path: '404', component: AppErrorComponent},
  // { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
