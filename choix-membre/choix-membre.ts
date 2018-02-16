import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ChoixMembrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix-membre',
  templateUrl: 'choix-membre.html',
})
export class ChoixMembrePage {
  Amis:Object[];
  response:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public toastCtrl: ToastController) {
  }
  suggestion(){
    this. rest.SuggestMembre(localStorage.getItem("idUser").toString(),this.navParams.data). subscribe ( res => {
      this.Amis = res.json();
      /*if(this.Amis.length!=0){
      console.log("Suggestion "+this.Amis[0]["nom"]);
      }*/
     })
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  invitation(idUser){
    this. rest.AjouterMembre(idUser,this.navParams.data). subscribe ( res => {
      this.response = res.text();
      this.suggestion();
      if(this.response!=null){
        
        let toast = this.toastCtrl.create({
          message:"Membre Ajouter  !!!!",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
     });
    
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChoixMembrePage');
    this.suggestion();
  }

}
