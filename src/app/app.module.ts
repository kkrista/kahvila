import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MyyntiComponent } from './myynti/myynti.component';
import { KahvilaComponent } from './kahvila/kahvila.component';

@NgModule({
  declarations: [
    AppComponent,
    MyyntiComponent,
    KahvilaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
