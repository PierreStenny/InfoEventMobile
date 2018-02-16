import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixInvitePage } from './choix-invite';

@NgModule({
  declarations: [
    ChoixInvitePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixInvitePage),
  ],
})
export class ChoixInvitePageModule {}
