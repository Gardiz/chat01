import { Component } from '@angular/core';


import { NoticiasMenuPage } from '../noticias-menu/noticias-menu';
import { ChatMenuPage } from '../chat-menu/chat-menu';
import { GeoMenuPage } from '../geo-menu/geo-menu';
import { FerramentasMenuPage } from '../ferramentas-menu/ferramentas-menu';
import { NavController } from 'ionic-angular';
import { CadastroMenuPage } from '../cadastro-menu/cadastro-menu';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { IntroducaoPage } from '../introducao/introducao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChatMenuPage;
  tab2Root = NoticiasMenuPage;
  tab3Root = GeoMenuPage;
  tab4Root = FerramentasMenuPage; 

  constructor() {

  }


}
