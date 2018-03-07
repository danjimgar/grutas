import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
