import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDialogComponent } from './overlay-dialog.component';

describe('OverlayDialogComponent', () => {
  let component: OverlayDialogComponent;
  let fixture: ComponentFixture<OverlayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
