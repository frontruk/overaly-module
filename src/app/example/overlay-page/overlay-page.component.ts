import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
interface ListItemType {
  name: string;
  icon: string;
  type: string;
  path?: string;
  active: boolean;
}
interface ListType {
  items: Array<ListItemType>;
}

@Component({
  styleUrls: ['overlay-page.component.scss'],
  templateUrl: './overlay-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayPageComponent implements OnInit {

  isTestAOpened = false;
  isTestBOpened = false;
  /**
   * Navigation testing
   */
  menulist: ListType = {
    items: [
      { name: 'Profile', icon: 'sem-icon-profile', type: 'default', path: '', active: false},
      { name: 'My sites', icon: 'sem-icon-sites', type: 'default', path: '',  active: true},
      { name: 'Settings', icon: 'sem-icon-settings', type: 'default', path: '',  active: false},
      { name: 'Payment', icon: 'sem-icon-payment', type: 'danger', path: '',  active: false},
    ],
  };
  constructor() { }

  ngOnInit() {
  }
  openTestA(isOpened: boolean) {
    this.isTestAOpened = isOpened;
  }
  openTestB(isOpened: boolean) {
    this.isTestBOpened = isOpened;
  }
}
