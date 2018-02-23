import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { IntroducaoPage } from '../introducao/introducao';
import { CadastroMenuPage } from '../cadastro-menu/cadastro-menu';
import { NoticiasPage } from '../noticias/noticias';
/**
 * Generated class for the NoticiasMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias-menu',
  templateUrl: 'noticias-menu.html',
})
export class NoticiasMenuPage {

  rootPage = NoticiasPage;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public menuCtrl : MenuController) {

//SOMENTE UM MENU FUNCIONA NO IONIC, ENTÃO PEGAR O ID(NO HTML) E AQUI FAZER ENABLED/DISABLED
      this.menuCtrl.enable(false, 'menuChat');
      this.menuCtrl.enable(true, 'menuNoticias');
  }

  //openPage1Menu(){
 //   this.menuCtrl.enable(false, menuChat);  //disabling all other menus
   // this.menuCtrl.enable(false, page3menu);
 //   this.menuCtrl.enable(true, menuNoticias);
  //  this.menuCtrl.open(menuNoticias);  
//}


  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasMenuPage');
  }

  abrirCadastro(){
    this.navCtrl.push(CadastroMenuPage);
  }

  abrirContact(){
    this.navCtrl.push(ContactPage);
  }

  abrirSobre(){
    this.navCtrl.push(AboutPage);
  }

  abrirIntroducao(){
    this.navCtrl.push(IntroducaoPage);
  }




}
