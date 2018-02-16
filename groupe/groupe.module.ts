import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupePage } from './groupe';

@NgModule({
  declarations: [
    GroupePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupePage),
  ],
})
export class GroupePageModule {}
