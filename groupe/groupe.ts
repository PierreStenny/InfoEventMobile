import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the GroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupe',
  templateUrl: 'groupe.html',
})
export class GroupePage {
Groupe:Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  addGroupe(){
    this.navCtrl.push("CreeGroupePage");
  }
  MesGroupe(){
    this. rest.MyGroupe(localStorage.getItem("idUser").toString()). subscribe ( res => {
      this.Groupe = res.json();
      /*if(this.Groupe.length!=0){
      
        console.log("Groupe "+this.Groupe[0]["id"]);
      }*/
      
    });
  }
  goInfoGroupe(idEvent){
    this.navCtrl.push("InfoGroupePage",idEvent);
  }
  goToolGroupe(idEvent){
    this.navCtrl.push("ToolGroupePage",idEvent);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad GroupePage');
    this.MesGroupe();
  }

}
