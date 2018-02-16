import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the MesInvitationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-invitation',
  templateUrl: 'mes-invitation.html',
})
export class MesInvitationPage {
Invitation:Object[];
InvitationPart:Object[];
response:String;
segment: string = "event";
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
    this.MesInvitation(localStorage.getItem("idUser").toString());
    this.MesInvitationPart(localStorage.getItem("idUser").toString());
  }
  MesInvitation(idUser){
    this. rest.getinvitationEvent(idUser). subscribe ( res => {
      this.Invitation = res.json();
     /* if(this.Invitation.length!=0){
        console.log("invitation "+this.Invitation[0]["id"]);
      }*/
      
    });
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  AcceptInvitation(idUser,idEvent){
    this. rest.AcceptInvitation(idUser,idEvent,1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitation(localStorage.getItem("idUser").toString());
      /*if(this.response!=null){
        console.log("invitation Accept"+this.response);
      }*/
      
    });
  }
  RefuseInvitation(idUser,idEvent){
    this. rest.AcceptInvitation(idUser,idEvent,-1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitation(localStorage.getItem("idUser").toString());
      /*if(this.response!=null){
        console.log("invitation Accept"+this.response);
      }*/
      
    });
  }
  MesInvitationPart(idUser){
    this. rest.getinvitationPart(idUser). subscribe ( res => {
      this.InvitationPart = res.json();
      /*if(this.InvitationPart.length!=0){
        console.log("invitationPart "+this.InvitationPart[0]["id"]);
      }*/
      
    });
  }
  AcceptInvitationPart(idUser,idEvent){
    this. rest.AcceptInvitationPart(idUser,idEvent,1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitationPart(localStorage.getItem("idUser").toString());
      if(this.response!=null){
        console.log("invitationPart Accept"+this.response);
      }
      
    });
  }
  RefuseInvitationPart(idUser,idEvent){
    this. rest.AcceptInvitationPart(idUser,idEvent,-1). subscribe ( res => {
      this.response = res.text();
      this.MesInvitationPart(localStorage.getItem("idUser").toString());
      if(this.response!=null){
        console.log("invitationPart Accept"+this.response);
      }
      
    });
  }
  getInfoEvent(idEvent){
    this.navCtrl.push("InfoEventPage",idEvent);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MesInvitationPage');
    this.MesInvitation(localStorage.getItem("idUser").toString());
    this.MesInvitationPart(localStorage.getItem("idUser").toString());
  }

}
