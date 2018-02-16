import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  @ViewChild("password") password;
  constructor(public navCtrl: NavController) {
    
  
  }
  goLogin(){
     this.navCtrl.push('LoginPage');
  }
  goInscription(){
    this.navCtrl.push('InscriptionPage');
 }
}



