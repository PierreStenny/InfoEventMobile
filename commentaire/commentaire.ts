import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CommentairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentaire',
  templateUrl: 'commentaire.html',
})
export class CommentairePage {
  response:String;
  texte:String;
  Commentaire:Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
  }
  commentaire(){
    this. rest.commentaire(localStorage.getItem("idUser").toString(),this.navParams.data,this.texte). subscribe ( res => {
      this.response = res.text();
      this.getCommentaire(); 
      this.texte="";
      /*if(this.response!=null){
      console.log("Commentaire "+this.response);
      }*/
     });
  }
  getCommentaire(){
    this. rest.getcommentaire(this.navParams.data). subscribe ( res => {
      this.Commentaire = res.json();
      
      /*if(this.Commentaire.length!=0){
        console.log("Commentaire "+this.Commentaire[0]["id"]);
      }*/
      
    });
  }
  goInfoPerso(idUser){
    this.navCtrl.push("InfoPersoPage",idUser);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad CommentairePage');
    this.getCommentaire();
  }

}
