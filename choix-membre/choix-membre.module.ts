import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixMembrePage } from './choix-membre';

@NgModule({
  declarations: [
    ChoixMembrePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixMembrePage),
  ],
})
export class ChoixMembrePageModule {}
