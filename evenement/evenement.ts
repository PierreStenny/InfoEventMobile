import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the EvenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
})
export class EvenementPage {
  Evenement :Object[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
    this.getMesEvent(localStorage.getItem("idUser").toString());
   
  }
  addEvent(){
    this.navCtrl.push("CreeEventPage");
  }

  getMesEvent(idUser)
  {
  this. rest.MesEvenement (idUser). subscribe ( res => {
  this.Evenement = res.json();
  /*if(this.Evenement.length!=0){
  console.log(this.Evenement[0]['id']);
  }*/
  });
  }
  getInfoEvent(idEvent){
    this.navCtrl.push("InfoEventPage",idEvent);
  }
  getToolEvent(idEvent){
    this.navCtrl.push("ToolEventPage",idEvent);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad EvenementPage');
    this.getMesEvent(localStorage.getItem("idUser").toString());
  }

}
