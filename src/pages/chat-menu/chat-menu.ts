import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { AlertController } from 'ionic-angular'; //Mensagem na tela
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the ChatMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-menu',
  templateUrl: 'chat-menu.html',
})
export class ChatMenuPage {

   
  rootPage = ChatPage;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private alertCtrl: AlertController
    , public menuCtrl : MenuController) {

//SOMENTE UM MENU FUNCIONA NO IONIC, ENTÃO PEGAR O ID(NO HTML) E AQUI FAZER ENABLED/DISABLED
      this.menuCtrl.enable(true, 'menuChat');
      this.menuCtrl.enable(false, 'menuNoticias');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatMenuPage');
  }

  onSignup(): void{
    this.navCtrl.push(SignupPage);
  }


  abrirCadastroUsuario(){
    let alert = this.alertCtrl.create({
      title: 'abrirCadastroUsuario',
      subTitle: 'abrirCadastroUsuario(){',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  abrirCadastroPerfil(){
    let alert = this.alertCtrl.create({
    title: 'abrirCadastroPerfil',
    subTitle: 'abrirCadastroPerfil(){',
    buttons: ['Dismiss']
  });
  alert.present();
}

  abrirCadastroGrupo(){
    let alert = this.alertCtrl.create({
      title: 'abrirCadastroGrupo',
      subTitle: 'abrirCadastroGrupo(){',
      buttons: ['Dismiss']
    });
    alert.present();

  }

  abrirCadastroPermissao(){

    let alert = this.alertCtrl.create({
      title: 'abrirCadastroPermissao',
      subTitle: 'abrirCadastroPermissao(){',
      buttons: ['Dismiss']
    });
    alert.present();

  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
