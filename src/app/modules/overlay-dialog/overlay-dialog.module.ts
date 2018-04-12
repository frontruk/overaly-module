import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayDialogComponent } from './overlay-dialog.component';
import { MaterialManifestModule } from '../material-manifest/material-manifest.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialManifestModule,
  ],
  declarations: [OverlayDialogComponent],
  exports:  [OverlayDialogComponent]
})
export class OverlayDialogModule { }
