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
import { GeoMenuPage } from '../pages/geo-menu/geo-menu';
import { GeoConfigPage } from '../pages/geo-config/geo-config';
import { NoticiasPage } from '../pages/noticias/noticias';

import{ FirebaseAppConfig, AngularFireModule} from 'angularfire2'; //Configurando Firebase Database

import { SignupPage } from '../pages/signup/signup';

//import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { UserService } from '../providers/user/user.service';
import { UserServiceProvider } from '../providers/user-service/user-service';




//Configurando Firebase Database
const firebaseAppConfig: FirebaseAppConfig ={
  apiKey: "AIzaSyClmAFjCmu7FHeFDg3pW5xjS-45nXk_wMA",
  authDomain: "chat01-a91de.firebaseapp.com",  //para trabalhar com autenticação
  databaseURL: "https://chat01-a91de.firebaseio.com", //para trabalhar com Realtimedatabase
  //projectId: "chat01-a91de",
  storageBucket: "chat01-a91de.appspot.com", //Para trabalhar com storage(arquivos)
  messagingSenderId: "958990028732" //para trabalhar com  Cloud Message 
};

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
    GeoMenuPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAppConfig), //Configurando Firebase Database
    AngularFireDatabaseModule, //Configurando Firebase Database
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
    GeoMenuPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},     
    UserServiceProvider
  ]
})
export class AppModule {}
