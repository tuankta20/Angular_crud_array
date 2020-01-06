import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { WorksComponent } from './works/works.component';
import { UserformComponent } from './userform/userform.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    WorksComponent,
    UserformComponent,
    WordsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
