import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { App, MenuController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
  segment: string = "event";
  Items :Object[];
  src : String;
  User : Object;
  Suggestion : Object[];
  response:String;
  Evenement :Object[];
  Groupe:Object[];
  constructor(app: App,public navCtrl: NavController,public menu: MenuController ,public rest : RestProvider,public toastCtrl: ToastController) {
        
console.log('ionViewDidLoad ComptePage'+localStorage.getItem("idUser").toString());
//this.getUser(localStorage.getItem("idUser").toString());
  this.getEvent();
  }
  getPays ()
  {
  this. rest.getPays (). subscribe ( res => {
  this.Items = res.json();
  //console.log(this.Items[0]['nom']);
  });
  
  }
  getEvent()
  {
  this. rest.getEvenement (). subscribe ( res => {
  this.Evenement = res.json();
 /* if(this.Evenement.length!=0){
  console.log(this.Evenement[0]['id']);
  }*/
  });
  }
  openMenu() {
    this.menu.open();
  }
 
  closeMenu() {
    this.menu.close();
  }
  goMenu(){
    this.navCtrl.push('MenuPage');
  }
  
  getUser(use){
    this. rest.getUser(use). subscribe ( res => {
      this.User = res.json();
      localStorage.setItem("email",this.User["email"]);
     MyApp.prototype.email=this.User["email"];
     MyApp.prototype.nom=this.User["nom"];
     MyApp.prototype.prenom=this.User["prenom"];
     MyApp.prototype.navCtrl=this.navCtrl;
      //console.log("Object "+this.User["region"]);
      this.getSuggest ();
      this.getSuggestGroupe ();
     })
  }
  getSuggest ()
  {
  this. rest.getSuggestion(this.User["region"],this.User["ville"],this.User["id"]). subscribe ( res => {
  this.Suggestion = res.json();
  /*if(this.Suggestion.length!=0){
  console.log("suggest"+this.Suggestion[0]['nom']);
  }*/
  });
  }
  getSuggestGroupe ()
  {
  this. rest.SuggestGroupe(this.User["pays"],this.User["region"],this.User["ville"],this.User["id"]). subscribe ( res => {
  this.Groupe = res.json();
  /*if(this.Groupe.length!=0){
  console.log("suggest Groupe"+this.Groupe[0]['nom']);
  }*/
  });
  }
  goInfoGroupe(idEvent){
    this.navCtrl.push("InfoGroupePage",idEvent);
  }
  goTypeEvent(type){
    this.navCtrl.push("TypeEventPage",type);
  }
  goInfoPerso(idUser){
    //console.log("test"+idUser);
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  
  demande(idUser){
    this. rest.demande(idUser,localStorage.getItem("idUser").toString()). subscribe ( res => {
      this.response = res.text();
      if(this.response!=null){
        let toast = this.toastCtrl.create({
          message:" Invitation Envoyer  !!!!",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
     });
  }
  getInfoEvent(idEvent){
    this.navCtrl.push("InfoEventPage",idEvent);
  }
  Jaime(idEvent){
    this. rest.Jaime(localStorage.getItem("idUser").toString(),idEvent). subscribe ( res => {
      this.response = res.text();
      this.getEvent();
      
      /*if(this.response!=null){
      console.log("Jaime "+this.response);
      }*/
     });
  }
  goCommentaire(idEvent){
    this.navCtrl.push("CommentairePage",idEvent);
  }
  ionViewDidLoad(){
   // console.log('ionViewDidLoad ComptePage');
//this . getPays ();
this.getUser(localStorage.getItem("idUser").toString());
this.getEvent();
  }
}
