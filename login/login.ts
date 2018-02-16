import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'LoginPage'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email :string;
mdp :string;
response :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider, public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
  }
  Login(){
    this. rest.login(this.email,this.mdp). subscribe ( res => {
      this.response = res.text();
      //console.log(this.response);
     if(this.response=="1"){
        let toast = this.toastCtrl.create({
          message:"Mot de Passe Incorrect !!!!",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      else if(this.response=="0"){
        let toast = this.toastCtrl.create({
          message:" Le Compte n'existe pas !!!!",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      else{
        localStorage.setItem("idUser",this.response);
        this.navCtrl.setRoot(TabsPage);
        }
      });
  }
  goCompte() {
    this.navCtrl.setRoot(TabsPage);
  }
  
}
