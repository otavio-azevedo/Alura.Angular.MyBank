import { NewTransferComponent } from './transfer/new-transfer.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //DI
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USD'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
