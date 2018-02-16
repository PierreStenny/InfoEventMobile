import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController} from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuPage');
  }

}
