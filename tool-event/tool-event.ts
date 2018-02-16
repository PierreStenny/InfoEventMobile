import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ToolEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tool-event',
  templateUrl: 'tool-event.html',
})
export class ToolEventPage {
  Evenement:Object;
  Organisateur:Object;

  Invitation:Object[];
  InvitationPart:Object[];
  nombre="0";
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  infoEvent(){
    this. rest.getInfoEvenement(this.navParams.data). subscribe ( res => {
      this.Evenement = res.json();
      if(this.Evenement!=null){
        this.getUser(this.Evenement['idOrganisateur']);
      //console.log("info event "+this.Evenement['id']);
      }
      });
  }
  getUser(use){
    this. rest.getUser(use). subscribe ( res => {
      this.Organisateur = res.json();
      //console.log("Organisateur "+this.Organisateur["nom"]);
     })
  }
  invitation(idEvent){
    this.navCtrl.push("ChoixInvitePage",idEvent);
  }
  MesInvitationPart(){
    this. rest.getMyinvitationPart(this.navParams.data). subscribe ( res => {
      this.InvitationPart = res.json();
      /*if(this.InvitationPart.length!=0){
        console.log("invitationPart "+this.InvitationPart[0]["id"]);
      }*/
      
    });
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  MesInvitation(){
    this. rest.getMyinvitationEvent(this.navParams.data). subscribe ( res => {
      this.Invitation = res.json();
      if(this.Invitation.length!=0){
        this.nombre=""+this.Invitation.length;
        //console.log("invitation "+this.Invitation[0]["id"]);
      }
      
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolEventPage');
    this.infoEvent();
    this.MesInvitation();
    this.MesInvitationPart();
  }

}
