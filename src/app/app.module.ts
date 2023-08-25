import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// perfect scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { FilterPipe } from './pipe/filter.pipe';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PreparazioneGareComponent } from './pages/preparazione-gare/preparazione-gare.component';
import { AppaltiAggiudicatiComponent } from './pages/appalti-aggiudicati/appalti-aggiudicati.component';
import { OperaiComponent } from './pages/operai/operai.component';
import { ImpreseAppaltantiComponent } from './pages/imprese-appaltanti/imprese-appaltanti.component';
import { ElencoGareComponent } from './pages/preparazione-gare/elenco-gare/elenco-gare.component';
import { NuovaGaraComponent } from './pages/preparazione-gare/nuova-gara/nuova-gara.component';
import { NuovoOperaioComponent } from './pages/operai/nuovo-operaio/nuovo-operaio.component';
import { ElencoOperaiComponent } from './pages/operai/elenco-operai/elenco-operai.component';
import { NuovaImpresaComponent } from './pages/imprese-appaltanti/nuova-impresa/nuova-impresa.component';
import { ElencoImpreseComponent } from './pages/imprese-appaltanti/elenco-imprese/elenco-imprese.component';
import { ImpostazioniComponent } from './pages/impostazioni/impostazioni.component';
import { AppDailyActivitiesComponent } from './pages/dashboard/daily-activities/daily-activities.component';
import { AppWelcomeCardComponent } from './pages/dashboard/welcome-card/welcome-card.component';
import {
  AppFullcalendarComponent,
  CalendarDialogComponent,
} from './pages/calendar/fullcalendar/fullcalendar.component';
import { CalendarFormDialogComponent } from './pages/calendar/fullcalendar/calendar-form-dialog/calendar-form-dialog.component';
import { FormNuovaGaraComponent } from './pages/preparazione-gare/nuova-gara/form-nuova-gara/form-nuova-gara.component';
import { CategorieComponent } from './pages/preparazione-gare/nuova-gara/form-nuova-gara/categorie/categorie.component';
import { DatiNuovaGaraComponent } from './pages/preparazione-gare/nuova-gara/form-nuova-gara/dati-nuova-gara/dati-nuova-gara.component';
import { RibassiComponent } from './pages/preparazione-gare/nuova-gara/form-nuova-gara/ribassi/ribassi.component';
import { TodoCategorieComponent } from './pages/preparazione-gare/nuova-gara/form-nuova-gara/categorie/todo-categorie/todo-categorie.component';
import { DynamicTableComponent } from './components/DynamicTable/DynamicTable.component';
import { MezziComponent } from './pages/mezzi/mezzi.component';
import { ElencoMezziComponent } from './pages/mezzi/elenco-mezzi/elenco-mezzi.component';
import { NuovoMezzoComponent } from './pages/mezzi/nuovo-mezzo/nuovo-mezzo.component';
import { ToDoComponent } from './pages/imprese-appaltanti/nuova-impresa/to-do/to-do.component';
import { PaginaDettaglioComponent } from './components/pagina-dettaglio/pagina-dettaglio.component';
import { AppErrorComponent } from './components/error/error.component';
import { ModificaMezzoComponent } from './pages/mezzi/modifica-mezzo/modifica-mezzo.component';
import { ModificaOperaioComponent } from './pages/operai/modifica-operaio/modifica-operaio.component';
import { ModificaGaraComponent } from './pages/preparazione-gare/modifica-gara/modifica-gara.component';
import { ModificaImpresaComponent } from './pages/imprese-appaltanti/modifica-impresa/modifica-impresa.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FilterPipe,
    DashboardComponent,
    CalendarComponent,
    PreparazioneGareComponent,
    AppaltiAggiudicatiComponent,
    OperaiComponent,
    ImpreseAppaltantiComponent,
    ElencoGareComponent,
    NuovaGaraComponent,
    NuovoOperaioComponent,
    ElencoOperaiComponent,
    NuovaImpresaComponent,
    ElencoImpreseComponent,
    ImpostazioniComponent,
    CalendarDialogComponent,
    AppFullcalendarComponent,
    CalendarFormDialogComponent,
    FormNuovaGaraComponent,
    CategorieComponent,
    DatiNuovaGaraComponent,
    RibassiComponent,
    TodoCategorieComponent,
    DynamicTableComponent,
    MezziComponent,
    ElencoMezziComponent,
    NuovoMezzoComponent,
    ToDoComponent,
    PaginaDettaglioComponent,
    ModificaMezzoComponent,
    ModificaOperaioComponent,
    ModificaGaraComponent,
    ModificaImpresaComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    FeatherModule.pick(allIcons),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgScrollbarModule,
    FullComponent,
    AppDailyActivitiesComponent,
    AppWelcomeCardComponent,
    AppErrorComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class AppModule {}
