import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DemandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demande',
  templateUrl: 'demande.html',
})
export class DemandePage {
  Invitation:Object[];
  response:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  MesInvitation(idUser){
    this. rest.getDemande(idUser). subscribe ( res => {
      this.Invitation = res.json();
      /*if(this.Invitation.length!=0){
        console.log("invitation "+this.Invitation[0]["id"]);
      }*/
      
    });
  }
  AjouterAmis(idUser){
    this. rest.getAjouterAmis(idUser,localStorage.getItem("idUser").toString(),1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitation(localStorage.getItem("idUser").toString());
      //console.log("Ajouter Amis "+this.response);
    });
  }
  RefuseAmis(idUser){
    this. rest.getAjouterAmis(idUser,localStorage.getItem("idUser").toString(),-1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitation(localStorage.getItem("idUser").toString());
//console.log("Ajouter Amis "+this.response);
    });
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad DemandePage');
    this.MesInvitation(localStorage.getItem("idUser").toString());
  }

}
