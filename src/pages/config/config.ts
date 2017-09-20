import { Component } from '@angular/core';
import { NavController, NavParams, Config } from 'ionic-angular';


@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    public config: Config,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  public configTest(): void {
    // this.config.set('tabsPlacement', 'top');
    console.log(this.config.getModeConfig('ios'));
  }

}
