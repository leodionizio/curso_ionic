import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from './../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public pushPage(): void{
    this.navCtrl.push(ContactPage, {
      type: 'push',
      course: 'Ionic',
      year: 2017,
      message: () => {
        console.log('Ionic é vida');
      }
    });
  }

  public setRoot(): void{
    this.navCtrl.setRoot(ContactPage, {
      type: 'setRoot'
    });
  }

}
