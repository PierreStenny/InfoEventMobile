import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AmisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amis',
  templateUrl: 'amis.html',
})
export class AmisPage {
Amis:Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
    this.getAmis(this.navParams.data);
  }
  getAmis(use){
    this. rest.getAmis(use). subscribe ( res => {
      this.Amis = res.json();
/*if(this.Amis.length!=0){
      console.log("Amis "+this.Amis[0]["nom"]);
      }*/
     })
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AmisPage');
    this.getAmis(this.navParams.data);
  }

}
