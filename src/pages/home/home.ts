import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
