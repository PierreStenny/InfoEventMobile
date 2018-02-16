import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the InfoPersoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-perso',
  templateUrl: 'info-perso.html',
})
export class InfoPersoPage {
  User : Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  getUser(){
    this. rest.getUser(this.navParams.data). subscribe ( res => {
      this.User = res.json();
      //console.log("Object "+this.User["region"]);
     })
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad InfoPersoPage');
    this.getUser();
  }

}
