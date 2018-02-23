import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMenuPage } from './cadastro-menu';

@NgModule({
  declarations: [
    CadastroMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMenuPage),
  ],
})
export class CadastroMenuPageModule {}
