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
  ],
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
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
