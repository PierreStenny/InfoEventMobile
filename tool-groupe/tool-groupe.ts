import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ToolGroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tool-groupe',
  templateUrl: 'tool-groupe.html',
})
export class ToolGroupePage {
  Groupe:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public toastCtrl: ToastController) {
    this.InfoGroupe();
  }
  InfoGroupe(){
    this. rest.InfoGroupe(this.navParams.data). subscribe ( res => {
      this.Groupe = res.json();
      /*if(this.Groupe!=0){
      
        console.log("tool Groupe "+this.Groupe["id"]);
      }*/
      
    });
  }
  goSuggest(idEvent){
    if(localStorage.getItem("idUser").toString()==this.Groupe["admin"] || this.Groupe["type"]=="Ouvert"){
      this.navCtrl.push("ChoixMembrePage",idEvent);
    }
    else{
      let toast = this.toastCtrl.create({
        message:" Cette groupe est fermer  !!!!",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ToolGroupePage');
    this.InfoGroupe();
  }

}
