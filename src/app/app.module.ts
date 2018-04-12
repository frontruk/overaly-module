import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {
  Routes,
  RouterModule,
} from '@angular/router';

import { ExampleModule } from './example/example.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './example/example.module#ExampleModule',
  },

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
