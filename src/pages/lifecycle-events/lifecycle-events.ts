import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifecycleEventsPage');
  }

  ionViewCanEnter(): Promise<any> {
    return new Promise((resolve, reject) =>{
      console.log('aguardando 3 segundos');

      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if(number % 2 === 0){
          resolve();
          console.log(`${number} - Autorizado!`);
        } else {
          reject();
          console.log(`${number} - Não Autorizado!`);
        }
      }, 3000);

    })
  }

}
