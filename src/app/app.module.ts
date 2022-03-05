import { AppRoutingModule } from './app-routing.module';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { registerLocaleData } from '@angular/common';
import localeUS from '@angular/common/locales/es-US';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeUS, 'us');

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'us'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USD'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
