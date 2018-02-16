import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'Rxjs/Add/Operator/Map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http) {
    this . http = http ;
    console.log('Hello RestProvider Provider');
  }
        public getPays(){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/listePays'); 
        }
        public getType(){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/listeType'); 
        }
        public getRegion(idPays){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/listeRegion/'+idPays); 
        }
        public getVille(idPays,idReg){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/listeVille/'+idPays+"/"+idReg); 
        }
        public insertUser(email,mdp,nom,prenom,sexe,dateN,iP,iR,iV){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/inscription/'+email+"/"+mdp+"/"+nom+"/"+prenom+"/"+sexe+"/"+dateN+"/"+iP+"/"+iR+"/"+iV); 
        }
        public login(email,mdp){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/login/'+email+"/"+mdp); 
        }
        public getUser(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getUser/'+idUser); 
        }
        public newEvent(idUse,nom,lieu,type,categ,dateDeb,heure,dateFin,pays,reg,ville,desc){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/newEvent/'+idUse+"/"+nom+"/"+lieu+"/"+type+"/"+categ+"/"+dateDeb+"/"+heure+"/"+dateFin+"/"+pays+"/"+reg+"/"+ville+"/"+desc); 
        }
        public getEvenement(){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/listeEvenement'); 
        }
        public MesEvenement(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/MesEvenement/'+idUser); 
        }
        public TypeEvenement(type){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/TypeEvenement/'+type); 
        }
        public getInfoEvenement(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/infoEvenement/'+idEvent); 
        }
        public getSuggestion(region,ville,idUse){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getSuggestion/'+region+"/"+ville+"/"+idUse); 
        }
        public getAjouterAmis(idUser1,idUser2,etat){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/AjouterAmis/'+idUser1+"/"+idUser2+"/"+etat); 
        }
        public getAmis(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getAmis/'+idUser); 
        }
        public invitationEvent(idUser,idSender,idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/invitationEvent/'+idUser+"/"+idSender+"/"+idEvent); 
        }
        public getinvitationEvent(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getInvitationEvent/'+idUser); 
        }
        public getMyinvitationEvent(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getMyInvitationEvent/'+idEvent); 
        }
        public AcceptInvitation(idUser,idEvent,etat){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/AcceptInvitation/'+idUser+"/"+idEvent+"/"+etat); 
        }
        public getAgenda(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getAgenda/'+idUser); 
        }
        public finirAgenda(id){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/FinirAgenda/'+id); 
        }
        public commentaire(idUser,idEvent,texte){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/Commentaire/'+idUser+"/"+idEvent+"/"+texte); 
        }
        public getcommentaire(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getCommentaire/'+idEvent); 
        }
        public getcommentaireUser(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getCommentUser/'+idEvent); 
        }
        public Jaime(idUser,idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/Jaime/'+idUser+"/"+idEvent); 
        }
        public getJaimeUser(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getJaimeUser/'+idEvent); 
        }
        public invitationPart(idUser,idSender,idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/invitationPart/'+idUser+"/"+idSender+"/"+idEvent); 
        }
        public getinvitationPart(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getInvitationPart/'+idUser); 
        }
        public getMyinvitationPart(idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getMyInvitationPart/'+idEvent); 
        }
        public AcceptInvitationPart(idUser,idEvent,etat){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/AcceptInvitationPart/'+idUser+"/"+idEvent+"/"+etat); 
        }
        public newGroupe(idUse,nom,type,pays,reg,ville,desc){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/newGroupe/'+idUse+"/"+nom+"/"+type+"/"+pays+"/"+reg+"/"+ville+"/"+desc); 
        }
        public MyGroupe(idUse){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getMyGroupe/'+idUse); 
        }
        public InfoGroupe(idGroupe){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getInfoGroupe/'+idGroupe); 
        }
        public SuggestMembre(idUser,idGroupe){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/suggestMembre/'+idUser+"/"+idGroupe); 
        }
        public AjouterMembre(idUser,idEvent){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/AjouterMembre/'+idUser+"/"+idEvent); 
        }
        public SuggestGroupe(pay,reg,vill,idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/suggestGroupe/'+pay+"/"+reg+"/"+vill+"/"+idUser); 
        }
        public demande(idUser,idSender){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/demande/'+idUser+"/"+idSender); 
        }
        public getDemande(idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/WebService/getDemande/'+idUser); 
        }
        public UploadImage(Base64,idUser){
          return  this.http.get('https://infoeventv2.herokuapp.com/rest/Items/Upload/'+Base64+"/"+idUser); 
        }
  }
