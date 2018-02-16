import { Component } from '@angular/core';
import { ComptePage } from '../compte/compte';
import { MesInvitationPage } from '../mes-invitation/mes-invitation';
import { AgendaPage } from '../agenda/agenda';
import { DemandePage } from '../demande/demande';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 public param:any;
  tab1Root = ComptePage;
  tab2Root = DemandePage;
  tab3Root = MesInvitationPage;
  tab4Root = AgendaPage;
  constructor() {
  }
}
