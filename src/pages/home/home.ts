import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from './../contact/contact';
import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { ConfigPage } from './../config/config';

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

  public lifeCycle(): void {
    this.navCtrl.push(LifecycleEventsPage);
  }

  public configPage(){
    this.navCtrl.push(ConfigPage);
    
  }

}
