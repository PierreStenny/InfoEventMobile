import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CommentaireUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentaire-user',
  templateUrl: 'commentaire-user.html',
})
export class CommentaireUserPage {
  User:Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  getUser(){
    this. rest.getcommentaireUser(this.navParams.data). subscribe ( res => {
      this.User = res.json();
      /*if(this.User.length!=0){
      console.log("Commenteur "+this.User[0]["nom"]);
      }*/
     })
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad CommentaireUserPage');
    this.getUser();
  }

}
