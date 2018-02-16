import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
  Pays :Object[];
  Region :Object[];
  Ville :Object[];
  /////////ng-model////////
  nom :string;
  prenom:string ;
  DateNais :string;
  sexe:String;
  pays:String;
  regs:string ;
  villes:string;
  email:string;
  mdp:string;

  response :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public loadingCtrl: LoadingController) {
   
  }
  getPays ()
  {

  this. rest.getPays (). subscribe ( res => {
  this.Pays = res.json();
  //console.log(this.Pays[0]['nom']);
  });
  }
  getRegion (idPay)
  {
  this. rest.getRegion (idPay). subscribe ( res => {
  this.Region = res.json();
  //console.log(this.Region[0]['nom']);
  });
  }
  getVille (idPay,idReg)
  {
  this. rest.getVille (idPay,idReg). subscribe ( res => {
  this.Ville = res.json();
  //console.log(this.Ville[0]['nom']);
  });
  }
  Valider(){
    
    this. rest.insertUser (this.email,this.mdp,this.nom,this.prenom,this.sexe,this.DateNais,this.pays,this.regs,this.villes). subscribe ( res => {
      this.response = res.text();
      //console.log(this.response);
    
      if(this.response!="0"){
    
        localStorage.setItem("idUser",this.response);
      this.navCtrl.setRoot(TabsPage);
      }
      });
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad InscriptionPage');
    this.getPays ();
  }
  
}
