import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CreeGroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cree-groupe',
  templateUrl: 'cree-groupe.html',
})
export class CreeGroupePage {
  Pays :Object[];
  Region :Object[];
  Ville :Object[];
  //////////////
  nom :string;
  type :string;
  pays:String;
  regs:string ;
  villes:string;
  desc:String;

  response :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public loadingCtrl: LoadingController) {
    this.getPays ();
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
    
    this. rest.newGroupe(localStorage.getItem("idUser").toString(),this.nom,this.type,this.pays,this.regs,this.villes,this.desc). subscribe ( res => {
      this.response = res.text();
     
      if(this.response=="Ok"){
        
        this.navCtrl.setRoot(TabsPage);
      }
      });
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad CreeGroupePage');
    this.getPays ();
  }

}
