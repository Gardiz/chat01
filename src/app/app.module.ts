import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroducaoPage } from '../pages/introducao/introducao';
import { CadastroMenuPage } from '../pages/cadastro-menu/cadastro-menu';
import { ChatPage } from '../pages/chat/chat';
import { ChatConfigPage } from '../pages/chat-config/chat-config';
import { ChatContatosPage } from '../pages/chat-contatos/chat-contatos';
import { ChatMenuPage } from '../pages/chat-menu/chat-menu';
import { NoticiasMenuPage } from '../pages/noticias-menu/noticias-menu';
import { FerramentasGravadorPage } from '../pages/ferramentas-gravador/ferramentas-gravador';
import { FerramentasLanternaPage } from '../pages/ferramentas-lanterna/ferramentas-lanterna';
import { FerramentasMenuPage } from '../pages/ferramentas-menu/ferramentas-menu';
import { FerramentasPanicoPage } from '../pages/ferramentas-panico/ferramentas-panico';
import { GeoPage } from '../pages/geo/geo';
import { GeoConfigPage } from '../pages/geo-config/geo-config';
import { GeoMenuPage } from '../pages/geo-menu/geo-menu';
import { NoticiasPage } from '../pages/noticias/noticias';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    IntroducaoPage,
    CadastroMenuPage,
    ChatPage,
    ChatConfigPage,
    ChatContatosPage,
    ChatMenuPage,
    NoticiasPage,
    NoticiasMenuPage,
    FerramentasGravadorPage,
    FerramentasLanternaPage,
    FerramentasMenuPage,
    FerramentasPanicoPage,
    GeoPage,
    GeoConfigPage,
    GeoMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    IntroducaoPage,
    CadastroMenuPage,
    ChatPage,
    ChatConfigPage,
    ChatContatosPage,
    ChatMenuPage,
    NoticiasPage,
    NoticiasMenuPage,
    FerramentasGravadorPage,
    FerramentasLanternaPage,
    FerramentasMenuPage,
    FerramentasPanicoPage,
    GeoPage,
    GeoConfigPage,
    GeoMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
