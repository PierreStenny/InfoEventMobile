import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JaimeUserPage } from './jaime-user';

@NgModule({
  declarations: [
    JaimeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(JaimeUserPage),
  ],
})
export class JaimeUserPageModule {}
