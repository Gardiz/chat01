import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; //para Form

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;  //para Form

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public formBuilder: FormBuilder   //para Form
    , public userServiceProvider: UserServiceProvider
  ) {


    //VALIDAÇÃO DO FORMULÁRIO
    let emailRegex =   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
      , username: ['', [Validators.required, Validators.minLength(3)]]
      , email: ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)])]]
      , password: ['', [Validators.required, Validators.minLength(6)]]
    })
    //FIM: VALIDAÇÃO DO FORMULÁRIO

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  onSubmit(): void {
    console.log("Form submited!"); //Formulário enviado
    console.log(this.signupForm.value); //Mostra os valores do Formulário enviado
   this.userServiceProvider.create(this.signupForm.value)
   //this.userServiceProvider.create(this.signupForm.value, authUser.uid)
    .then(() => {
     console.log("Usuário cadastrado com sucesso!")
   } );
  }

}
