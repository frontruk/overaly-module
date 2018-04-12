import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule, Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialManifestModule } from './material-manifest/material-manifest.module';
import { OverlayDialogModule } from './overlay-dialog/overlay-dialog.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const UIMODULES = [
  MaterialManifestModule,
  OverlayDialogModule,
];


@NgModule({
  imports: [CommonModule, UIMODULES,  BrowserModule, FormsModule ],
  exports: [UIMODULES],
})
export class UiModules {}
