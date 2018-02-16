import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentaireUserPage } from './commentaire-user';

@NgModule({
  declarations: [
    CommentaireUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentaireUserPage),
  ],
})
export class CommentaireUserPageModule {}
