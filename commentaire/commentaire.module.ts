import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentairePage } from './commentaire';

@NgModule({
  declarations: [
    CommentairePage,
  ],
  imports: [
    IonicPageModule.forChild(CommentairePage),
  ],
})
export class CommentairePageModule {}
