import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasMenuPage } from './noticias-menu';

@NgModule({
  declarations: [
    NoticiasMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasMenuPage),
  ],
})
export class NoticiasMenuPageModule {}
