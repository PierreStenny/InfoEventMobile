import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
Agenda:Object[];
response:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
    this.getAgenda(localStorage.getItem("idUser").toString());
    
  }
  getAgenda(idUser){
    this. rest.getAgenda(idUser). subscribe ( res => {
      this.Agenda = res.json();
      /*if(this.Agenda.length!=0){
        console.log("Agenda "+this.Agenda[0]["id"]);
      }*/
      
    });
  }
  finirAgenda(id){
    this. rest.finirAgenda(id). subscribe ( res => {
      this.response = res.text();
      /*if(this.response.length!=0){
        console.log("Agenda fin "+this.response);
      }*/
      this.ionViewDidLoad();
    });
  }
  getInfoEvent(idEvent){
    this.navCtrl.push("InfoEventPage",idEvent);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AgendaPage');
    this.getAgenda(localStorage.getItem("idUser").toString());
  }

}
