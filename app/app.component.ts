import { Component } from '@angular/core';
import { Platform, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import {MenuController } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
 email:string;
 nom:string ;
 prenom:string;
 navCtrl:NavController;
  constructor(public menu: MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public rest : RestProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     
    });
  }
  goEvent(){
  this.navCtrl.push("EvenementPage");
  this.menu.close();
  }
  goAmis(){
    this.navCtrl.push("AmisPage",localStorage.getItem("idUser"));
    this.menu.close();
  }
  goMonCompte(){
    this.navCtrl.push("ItemCreatePage");
    this.menu.close();
  }
  goGroupe(){
    this.navCtrl.push("GroupePage");
    this.menu.close();
  }
  ionViewDidLoad() {
     console.log("glenn ggg !!!!!!");
  }
}
