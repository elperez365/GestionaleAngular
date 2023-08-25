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


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendario', component: CalendarComponent },
  { path: 'gare', component: PreparazioneGareComponent },
  { path: 'gare_elenco', component: ElencoGareComponent },
  { path: 'gare_nuovo', component: NuovaGaraComponent },
  { path: 'appalti', component: AppaltiAggiudicatiComponent },
  { path: 'operai_elenco', component: ElencoOperaiComponent },
  { path: 'operai_form', component: NuovoOperaioComponent },
  { path: 'operai_form/:id', component: NuovoOperaioComponent },
  { path: 'mezzi_elenco', component: ElencoMezziComponent },
  { path: 'mezzi_nuovo', component: NuovoMezzoComponent },
  { path: 'imprese', component: ImpreseAppaltantiComponent },
  { path: 'imprese_nuovo', component: NuovaImpresaComponent },
  { path: 'imprese_elenco', component: ElencoImpreseComponent },
  { path: 'impostazioni', component: ImpostazioniComponent },
  { path: 'dettaglio/:cat/:id', component: PaginaDettaglioComponent },
  {
    path: 'modifica_impreseAppaltanti/:cat/:id',
    component: ModificaImpresaComponent,
  },
  { path: 'modifica_mezzi/:cat/:id', component: ModificaMezzoComponent },
  { path: 'modifica_operai/:cat/:id', component: ModificaOperaioComponent },
  { path: 'modifica_gara/:cat/:id', component: ModificaGaraComponent },
  { path: '404', component: AppErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
