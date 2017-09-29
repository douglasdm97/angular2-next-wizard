import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Formly
import { FormlyModule } from '@ngx-formly/core';
import { NextConfig,FIELD_TYPE_COMPONENTS } from './../formly/ui-next.config';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardNextModule  } from 'angular2-next-wizard/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FIELD_TYPE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FormlyModule.forRoot(NextConfig),
    NgbModule.forRoot(),
    FormWizardNextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
