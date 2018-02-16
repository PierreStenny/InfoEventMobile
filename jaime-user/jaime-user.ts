import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the JaimeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jaime-user',
  templateUrl: 'jaime-user.html',
})
export class JaimeUserPage {
  User:Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  getUser(){
    this. rest.getJaimeUser(this.navParams.data). subscribe ( res => {
      this.User = res.json();
      /*if(this.User.length!=0){
      console.log("Liker "+this.User[0]["nom"]);
      }*/
     })
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad JaimeUserPage');
    this.getUser();
  }

}
