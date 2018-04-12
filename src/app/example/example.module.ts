import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModules } from '../modules/index';

import { OverlayPageComponent } from './overlay-page/overlay-page.component';

const routes = [
  {
    path: '',
    component:  OverlayPageComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    UiModules,
    RouterModule.forChild(routes),
  ],
  declarations: [
    OverlayPageComponent,
  ]
})
export class ExampleModule { }
