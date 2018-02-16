import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ChoixInvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix-invite',
  templateUrl: 'choix-invite.html',
})
export class ChoixInvitePage {
  Amis:Object[];
  response:String;
  segment: string = "amis";
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public toastCtrl: ToastController) {
    //this.getAmis(localStorage.getItem("idUser").toString());
  }
  getAmis(use){
    this. rest.getAmis(use). subscribe ( res => {
      this.Amis = res.json();
      /*if(this.Amis.length!=0){
      console.log("Amis "+this.Amis[0]["nom"]);
      }*/
     })
  }
  invitation(idUser){
    this. rest.invitationEvent(idUser,localStorage.getItem("idUser").toString(),this.navParams.data). subscribe ( res => {
      this.response = res.text();
      if(this.response!=null){
        let toast = this.toastCtrl.create({
          message:" Invitation Envoyer  !!!!",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
     });
  }
  invitationPart(idUser){
    this. rest.invitationPart(idUser,localStorage.getItem("idUser").toString(),this.navParams.data). subscribe ( res => {
      this.response = res.text();
      if(this.response!=null){
        let toast = this.toastCtrl.create({
          message:" Invitation Envoyer  !!!!",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
     });
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChoixInvitePage');
    this.getAmis(localStorage.getItem("idUser").toString());
  }

}
