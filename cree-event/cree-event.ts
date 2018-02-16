import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the CreeEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cree-event',
  templateUrl: 'cree-event.html',
})
export class CreeEventPage {
  Pays :Object[];
  Region :Object[];
  Ville :Object[];
  Type :Object[];
  /////////ng-model////////
  nom :string;
  lieu:string ;
  type :string;
  categ:String;
  DateDeb:String;
  Heure:String;
  DateFin:String;
  pays:String;
  regs:string ;
  villes:string;
  desc:String;

  response :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider,public loadingCtrl: LoadingController) {
    this.getPays ();
    this.getType ();
  }
  getPays ()
  {

  this. rest.getPays (). subscribe ( res => {
  this.Pays = res.json();
  //console.log(this.Pays[0]['nom']);
  });
  }
  getType ()
  {

  this. rest.getType (). subscribe ( res => {
  this.Type = res.json();
  //console.log(this.Type[0]['nom']);
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
  console.log(this.Ville[0]['nom']);
  });
  }
  Valider(){
    
    this. rest.newEvent(localStorage.getItem("idUser").toString(),this.nom,this.lieu,this.type,this.categ,this.DateDeb,this.Heure,this.DateFin,this.pays,this.regs,this.villes,this.desc). subscribe ( res => {
      this.response = res.text();
     
      //console.log(this.Heure+""+this.response);
      if(this.response=="Ok"){
       
        this.navCtrl.setRoot(TabsPage);
      }
      });
  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad CreeEventPage');
    this.getPays ();
    this.getType ();  
  }
}
