webpackJsonp([16],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroMenuPage = (function () {
    function CadastroMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroMenuPage');
    };
    CadastroMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-menu',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\cadastro-menu\cadastro-menu.html"*/'<!--\n  Generated template for the CadastroMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>cadastroMenu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-->MENU\n  <-->\n    <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n\n\n\n          <button ion-item>\n            <!-->\n            <button ion-item (click)="abrirCadastroUsuario()">\n              <-->\n                Usuários\n            </button>\n\n            <button ion-item>\n              <!-->\n              <button ion-item (click)="abrirCadastroUsuario()">\n                <-->\n                  Perfis\n              </button>\n\n              <button ion-item>\n                <!-->\n                <button ion-item (click)="abrirCadastroUsuario()">\n                  <-->\n                    Grupos\n                </button>\n\n                <button ion-item>\n                  <!-->\n                  <button ion-item (click)="abrirCadastroUsuario()">\n                    <-->\n                      Permissões\n                  </button>\n\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <!-->FIM DO MENU\n    <-->\n</ion-content>'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\cadastro-menu\cadastro-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroMenuPage);
    return CadastroMenuPage;
}());

//# sourceMappingURL=cadastro-menu.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //Mensagem na tela

/**
 * Generated class for the ChatMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatMenuPage = (function () {
    function ChatMenuPage(navCtrl, navParams, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */];
        //SOMENTE UM MENU FUNCIONA NO IONIC, ENTÃO PEGAR O ID(NO HTML) E AQUI FAZER ENABLED/DISABLED
        this.menuCtrl.enable(true, 'menuChat');
        this.menuCtrl.enable(false, 'menuNoticias');
    }
    ChatMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatMenuPage');
    };
    ChatMenuPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    ChatMenuPage.prototype.abrirCadastroUsuario = function () {
        var alert = this.alertCtrl.create({
            title: 'abrirCadastroUsuario',
            subTitle: 'abrirCadastroUsuario(){',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChatMenuPage.prototype.abrirCadastroPerfil = function () {
        var alert = this.alertCtrl.create({
            title: 'abrirCadastroPerfil',
            subTitle: 'abrirCadastroPerfil(){',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChatMenuPage.prototype.abrirCadastroGrupo = function () {
        var alert = this.alertCtrl.create({
            title: 'abrirCadastroGrupo',
            subTitle: 'abrirCadastroGrupo(){',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChatMenuPage.prototype.abrirCadastroPermissao = function () {
        var alert = this.alertCtrl.create({
            title: 'abrirCadastroPermissao',
            subTitle: 'abrirCadastroPermissao(){',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChatMenuPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChatMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-menu',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-menu\chat-menu.html"*/'<!--\n  Generated template for the ChatMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Conversas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-->MENU\n  <-->\n  <ion-menu id="menuChat" [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>   \n            <button ion-item (click)="onSignup()">\n                Sign Up\n              </button>      \n            <button ion-item (click)="abrirCadastroUsuario()">           \n                Usuários\n            </button>           \n              <button ion-item (click)="abrirCadastroPerfil()">              \n                  Perfis\n              </button>            \n                <button ion-item (click)="abrirCadastroGrupo()">                \n                    Grupos\n                </button>             \n                  <button ion-item (click)="abrirCadastroPermissao()">                \n                      Permissões\n                  </button>\n                  <button ion-item menuClose>\n                      Close Menu\n                    </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <!-->FIM DO MENU\n    <-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-menu\chat-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], ChatMenuPage);
    return ChatMenuPage;
}());

//# sourceMappingURL=chat-menu.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Conversas</h1>\n<p>uma comunicador estilo Whatsapp aqui</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_service_user_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //para Form
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder //para Form
        , userServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder; //para Form
        this.userServiceProvider = userServiceProvider;
        //VALIDAÇÃO DO FORMULÁRIO
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(emailRegex)])]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        //FIM: VALIDAÇÃO DO FORMULÁRIO
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSubmit = function () {
        console.log("Form submited!"); //Formulário enviado
        console.log(this.signupForm.value); //Mostra os valores do Formulário enviado
        this.userServiceProvider.create(this.signupForm.value)
            .then(function () {
            console.log("Usuário cadastrado com sucesso!");
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 text-center>\n    <ion-icon class="auth-icon" name="person-add" color="primary"></ion-icon>\n  </h1>\n\n\n\n\n  <form [formGroup]="signupForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <!-- Quando clicar no button submit, dispara o ng-submit    -->\n      <!-- signupForm é definido no .ts -->\n      <!-- $event.preventDefault() é opcional (do angular para garantir) -->\n      <ion-item>\n        <ion-icon name="person" item-start color="primary"></ion-icon>\n        <ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="at" item-start color="primary"></ion-icon>\n        <ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="mail" item-start color="primary"></ion-icon>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="lock" item-start color="primary"></ion-icon>\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n      </ion-item>\n  \n      <br>\n      <button ion-button full type="submit" [disabled]="signupForm.invalid">Create Account</button>\n    <!--Enquanto signupForm é invalido o button tambem é desativo -->\n    </form>\n\n\n  <!-- FIM: ADIÇÃO DE UM FORMULÁRIO -->\n</ion-content>'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] //para Form
             !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] //para Form
            ) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _d || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FerramentasMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FerramentasMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FerramentasMenuPage = (function () {
    function FerramentasMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FerramentasMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FerramentasMenuPage');
    };
    FerramentasMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ferramentas-menu',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-menu\ferramentas-menu.html"*/'<!--\n  Generated template for the FerramentasMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ferramentasMenu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-->MENU\n  <-->\n  <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n\n\n\n          <button>\n            <!-->\n            <button ion-item (click)="abrirCadastroUsuario()">\n              <-->\n                Usuários\n            </button>\n\n            <button>\n              <!-->\n              <button ion-item (click)="abrirCadastroUsuario()">\n                <-->\n                  Perfis\n              </button>\n\n              <button>\n                <!-->\n                <button ion-item (click)="abrirCadastroUsuario()">\n                  <-->\n                    Grupos\n                </button>\n\n                <button>\n                  <!-->\n                  <button ion-item (click)="abrirCadastroUsuario()">\n                    <-->\n                      Permissões\n                  </button>\n\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <!-->FIM DO MENU\n    <-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-menu\ferramentas-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FerramentasMenuPage);
    return FerramentasMenuPage;
}());

//# sourceMappingURL=ferramentas-menu.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeoMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeoMenuPage = (function () {
    function GeoMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeoMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeoMenuPage');
    };
    GeoMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geo-menu',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo-menu\geo-menu.html"*/'<!--\n  Generated template for the GeoMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>geoMenu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-->MENU\n  <-->\n  <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n\n\n\n          <button>\n            <!-->\n            <button ion-item (click)="abrirCadastroUsuario()">\n              <-->\n                Usuários\n            </button>\n\n            <button>\n              <!-->\n              <button ion-item (click)="abrirCadastroUsuario()">\n                <-->\n                  Perfis\n              </button>\n\n              <button>\n                <!-->\n                <button ion-item (click)="abrirCadastroUsuario()">\n                  <-->\n                    Grupos\n                </button>\n\n                <button>\n                  <!-->\n                  <button ion-item (click)="abrirCadastroUsuario()">\n                    <-->\n                      Permissões\n                  </button>\n\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <!-->FIM DO MENU\n    <-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo-menu\geo-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GeoMenuPage);
    return GeoMenuPage;
}());

//# sourceMappingURL=geo-menu.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introducao_introducao__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_menu_cadastro_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noticias_noticias__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NoticiasMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasMenuPage = (function () {
    function NoticiasMenuPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__noticias_noticias__["a" /* NoticiasPage */];
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
    NoticiasMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasMenuPage');
    };
    NoticiasMenuPage.prototype.abrirCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadastro_menu_cadastro_menu__["a" /* CadastroMenuPage */]);
    };
    NoticiasMenuPage.prototype.abrirContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    NoticiasMenuPage.prototype.abrirSobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    NoticiasMenuPage.prototype.abrirIntroducao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__introducao_introducao__["a" /* IntroducaoPage */]);
    };
    NoticiasMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias-menu',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\noticias-menu\noticias-menu.html"*/'<!--\n  Generated template for the NoticiasMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Notícias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <!-->MENU\n  <-->\n    <ion-menu id="menuNoticias" [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>      \n          <button ion-item (click)="abrirCadastro()">\n            Cadastro\n          </button>\n          <button ion-item (click)="abrirContact()">\n            Contato\n          </button>\n          <button ion-item (click)="abrirSobre()">\n            Sobre\n          </button>\n          <button ion-item (click)="abrirIntroducao()">\n            Introdução\n          </button>\n          <button ion-item menuClose>\n            Close Menu\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <!-->FIM DO MENU\n    <-->\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\noticias-menu\noticias-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], NoticiasMenuPage);
    return NoticiasMenuPage;
}());

//# sourceMappingURL=noticias-menu.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = (function () {
    function NoticiasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\noticias\noticias.html"*/'<!--\n  Generated template for the NoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>noticias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Notícias aqui</h1>\n<p> uma lista de noticias e eventos, estilo facebook aqui.</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-menu/cadastro-menu.module": [
		328,
		15
	],
	"../pages/chat-config/chat-config.module": [
		329,
		14
	],
	"../pages/chat-contatos/chat-contatos.module": [
		330,
		13
	],
	"../pages/chat-menu/chat-menu.module": [
		331,
		12
	],
	"../pages/chat/chat.module": [
		332,
		11
	],
	"../pages/ferramentas-gravador/ferramentas-gravador.module": [
		333,
		10
	],
	"../pages/ferramentas-lanterna/ferramentas-lanterna.module": [
		334,
		9
	],
	"../pages/ferramentas-menu/ferramentas-menu.module": [
		335,
		8
	],
	"../pages/ferramentas-panico/ferramentas-panico.module": [
		336,
		7
	],
	"../pages/geo-config/geo-config.module": [
		337,
		6
	],
	"../pages/geo-menu/geo-menu.module": [
		338,
		5
	],
	"../pages/geo/geo.module": [
		339,
		4
	],
	"../pages/introducao/introducao.module": [
		340,
		3
	],
	"../pages/noticias-menu/noticias-menu.module": [
		341,
		2
	],
	"../pages/noticias/noticias.module": [
		342,
		1
	],
	"../pages/signup/signup.module": [
		343,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noticias_menu_noticias_menu__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_menu_chat_menu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geo_menu_geo_menu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ferramentas_menu_ferramentas_menu__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NavController } from 'ionic-angular';
//import { CadastroMenuPage } from '../cadastro-menu/cadastro-menu';
//import { ContactPage } from '../contact/contact';
//import { AboutPage } from '../about/about';
//import { IntroducaoPage } from '../introducao/introducao';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__chat_menu_chat_menu__["a" /* ChatMenuPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__noticias_menu_noticias_menu__["a" /* NoticiasMenuPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__geo_menu_geo_menu__["a" /* GeoMenuPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__ferramentas_menu_ferramentas_menu__["a" /* FerramentasMenuPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notícias" tabIcon="megaphone"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Geolocalização" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Ferramentas" tabIcon="build"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatConfigPage = (function () {
    function ChatConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatConfigPage');
    };
    ChatConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-config',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-config\chat-config.html"*/'<!--\n  Generated template for the ChatConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chatConfig</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-config\chat-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatConfigPage);
    return ChatConfigPage;
}());

//# sourceMappingURL=chat-config.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatContatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatContatosPage = (function () {
    function ChatContatosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatContatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatContatosPage');
    };
    ChatContatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-contatos',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-contatos\chat-contatos.html"*/'<!--\n  Generated template for the ChatContatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chatContatos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\chat-contatos\chat-contatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatContatosPage);
    return ChatContatosPage;
}());

//# sourceMappingURL=chat-contatos.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FerramentasGravadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FerramentasGravadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FerramentasGravadorPage = (function () {
    function FerramentasGravadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FerramentasGravadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FerramentasGravadorPage');
    };
    FerramentasGravadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ferramentas-gravador',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-gravador\ferramentas-gravador.html"*/'<!--\n  Generated template for the FerramentasGravadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ferramentasGravador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-gravador\ferramentas-gravador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FerramentasGravadorPage);
    return FerramentasGravadorPage;
}());

//# sourceMappingURL=ferramentas-gravador.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FerramentasLanternaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FerramentasLanternaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FerramentasLanternaPage = (function () {
    function FerramentasLanternaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FerramentasLanternaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FerramentasLanternaPage');
    };
    FerramentasLanternaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ferramentas-lanterna',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-lanterna\ferramentas-lanterna.html"*/'<!--\n  Generated template for the FerramentasLanternaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ferramentasLanterna</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-lanterna\ferramentas-lanterna.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FerramentasLanternaPage);
    return FerramentasLanternaPage;
}());

//# sourceMappingURL=ferramentas-lanterna.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FerramentasPanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FerramentasPanicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FerramentasPanicoPage = (function () {
    function FerramentasPanicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FerramentasPanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FerramentasPanicoPage');
    };
    FerramentasPanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ferramentas-panico',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-panico\ferramentas-panico.html"*/'<!--\n  Generated template for the FerramentasPanicoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ferramentasPanico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\ferramentas-panico\ferramentas-panico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FerramentasPanicoPage);
    return FerramentasPanicoPage;
}());

//# sourceMappingURL=ferramentas-panico.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeoConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeoConfigPage = (function () {
    function GeoConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeoConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeoConfigPage');
    };
    GeoConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geo-config',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo-config\geo-config.html"*/'<!--\n  Generated template for the GeoConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>geoConfig</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo-config\geo-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GeoConfigPage);
    return GeoConfigPage;
}());

//# sourceMappingURL=geo-config.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeoPage = (function () {
    function GeoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeoPage');
    };
    GeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geo',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo\geo.html"*/'<!--\n  Generated template for the GeoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>geo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\geo\geo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GeoPage);
    return GeoPage;
}());

//# sourceMappingURL=geo.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_introducao_introducao__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_menu_cadastro_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_config_chat_config__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_contatos_chat_contatos__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_menu_chat_menu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_noticias_menu_noticias_menu__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ferramentas_gravador_ferramentas_gravador__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ferramentas_lanterna_ferramentas_lanterna__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ferramentas_menu_ferramentas_menu__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ferramentas_panico_ferramentas_panico__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_geo_geo__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_geo_menu_geo_menu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_geo_config_geo_config__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_noticias_noticias__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























 //Configurando Firebase Database

//import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

//import { UserService } from '../providers/user/user.service';

//Configurando Firebase Database
var firebaseAppConfig = {
    apiKey: "AIzaSyClmAFjCmu7FHeFDg3pW5xjS-45nXk_wMA",
    authDomain: "chat01-a91de.firebaseapp.com",
    databaseURL: "https://chat01-a91de.firebaseio.com",
    //projectId: "chat01-a91de",
    storageBucket: "chat01-a91de.appspot.com",
    messagingSenderId: "958990028732" //para trabalhar com  Cloud Message 
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_introducao_introducao__["a" /* IntroducaoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_menu_cadastro_menu__["a" /* CadastroMenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_config_chat_config__["a" /* ChatConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_contatos_chat_contatos__["a" /* ChatContatosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_menu_chat_menu__["a" /* ChatMenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noticias_menu_noticias_menu__["a" /* NoticiasMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ferramentas_gravador_ferramentas_gravador__["a" /* FerramentasGravadorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ferramentas_lanterna_ferramentas_lanterna__["a" /* FerramentasLanternaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ferramentas_menu_ferramentas_menu__["a" /* FerramentasMenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ferramentas_panico_ferramentas_panico__["a" /* FerramentasPanicoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_geo_geo__["a" /* GeoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_geo_config_geo_config__["a" /* GeoConfigPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_geo_menu_geo_menu__["a" /* GeoMenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-menu/cadastro-menu.module#CadastroMenuPageModule', name: 'CadastroMenuPage', segment: 'cadastro-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-config/chat-config.module#ChatConfigPageModule', name: 'ChatConfigPage', segment: 'chat-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-contatos/chat-contatos.module#ChatContatosPageModule', name: 'ChatContatosPage', segment: 'chat-contatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-menu/chat-menu.module#ChatMenuPageModule', name: 'ChatMenuPage', segment: 'chat-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ferramentas-gravador/ferramentas-gravador.module#FerramentasGravadorPageModule', name: 'FerramentasGravadorPage', segment: 'ferramentas-gravador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ferramentas-lanterna/ferramentas-lanterna.module#FerramentasLanternaPageModule', name: 'FerramentasLanternaPage', segment: 'ferramentas-lanterna', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ferramentas-menu/ferramentas-menu.module#FerramentasMenuPageModule', name: 'FerramentasMenuPage', segment: 'ferramentas-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ferramentas-panico/ferramentas-panico.module#FerramentasPanicoPageModule', name: 'FerramentasPanicoPage', segment: 'ferramentas-panico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geo-config/geo-config.module#GeoConfigPageModule', name: 'GeoConfigPage', segment: 'geo-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geo-menu/geo-menu.module#GeoMenuPageModule', name: 'GeoMenuPage', segment: 'geo-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geo/geo.module#GeoPageModule', name: 'GeoPage', segment: 'geo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introducao/introducao.module#IntroducaoPageModule', name: 'IntroducaoPage', segment: 'introducao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias-menu/noticias-menu.module#NoticiasMenuPageModule', name: 'NoticiasMenuPage', segment: 'noticias-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_introducao_introducao__["a" /* IntroducaoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_menu_cadastro_menu__["a" /* CadastroMenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_config_chat_config__["a" /* ChatConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_contatos_chat_contatos__["a" /* ChatContatosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_menu_chat_menu__["a" /* ChatMenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noticias_menu_noticias_menu__["a" /* NoticiasMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ferramentas_gravador_ferramentas_gravador__["a" /* FerramentasGravadorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ferramentas_lanterna_ferramentas_lanterna__["a" /* FerramentasLanternaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ferramentas_menu_ferramentas_menu__["a" /* FerramentasMenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ferramentas_panico_ferramentas_panico__["a" /* FerramentasPanicoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_geo_geo__["a" /* GeoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_geo_config_geo_config__["a" /* GeoConfigPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_geo_menu_geo_menu__["a" /* GeoMenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__["a" /* UserServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_introducao_introducao__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_introducao_introducao__["a" /* IntroducaoPage */]; //TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //para Firebase
var UserServiceProvider = (function () {
    function UserServiceProvider(db //para Firebase
        //, public afAuth: AngularFireAuth //para Firebase
        //, public db: AngularFireDatabase //para Firebase
        //, public firebaseApp: FirebaseApp //para Firebase
    ) {
        this.db = db; //para Firebase
        console.log('Hello UserServiceProvider Provider');
    }
    //O PROBLEMA QUE SEMPRE SOBRESCREVE O VALOR NO bd
    UserServiceProvider.prototype.create = function (user) {
        return this.db.object('/users')
            .set(user)
            .catch();
        // create(user: User, uuid: string): Promise<void> {
        // return this.db.object(`/users/${uuid}`)
        // .set(user)
        // .catch();
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] //para Firebase
             !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] //para Firebase
            ) === "function" && _a || Object])
    ], UserServiceProvider);
    return UserServiceProvider;
    var _a;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroducaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroducaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroducaoPage = (function () {
    function IntroducaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroducaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroducaoPage');
    };
    IntroducaoPage.prototype.gotoTabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    IntroducaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introducao',template:/*ion-inline-start:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\introducao\introducao.html"*/'<!--\n  Generated template for the IntroducaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>introducao</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <!--  -->\n  <ion-slides pager>\n\n  <ion-slide style="background-color: green">\n    <h2>Slide 1</h2>\n    <button ion-button color="dark" full (click)="gotoTabsPage()">Entrar</button>\n  </ion-slide>\n\n  <ion-slide style="background-color: blue">\n    <h2>Slide 2</h2>\n    <button ion-button color="dark" full (click)="gotoTabsPage()">Entrar</button>\n  </ion-slide>\n\n  <ion-slide style="background-color: red">\n    <h2>Slide 3</h2>\n    <button ion-button color="dark" full (click)="gotoTabsPage()">Entrar</button>\n  </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gardiz\Documents\Programas\Para desenvolvimento Ionic\Projetos Ionic\ionicChat\src\pages\introducao\introducao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IntroducaoPage);
    return IntroducaoPage;
}());

//# sourceMappingURL=introducao.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map