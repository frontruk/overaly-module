import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output, ViewChild
} from '@angular/core';

import { OverlayOrigin } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'semui-overlay-dialog',
  styleUrls: ['overlay-dialog.component.scss'],
  templateUrl: './overlay-dialog.component.html'
})
export class OverlayDialogComponent implements OnInit {
  @Input() overlayOrigin: OverlayOrigin;
  @Input() isOpened = false;
  @Output() close = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();

  @ViewChild('dialog') dialog: ElementRef;
  destroy$ = new Subject<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {}
  connectedOverlayDetach() {
    this.changeState(false);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  private changeState(isOpened: boolean) {
    this.isOpened = isOpened;
    isOpened ? this.open.emit() : this.close.emit();
    this.changeDetectorRef.markForCheck();
  }
  private isClickedOutside(overlayOriginEl, dialog, event): boolean {
    return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
  }



}
