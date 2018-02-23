import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FerramentasMenuPage } from './ferramentas-menu';

@NgModule({
  declarations: [
    FerramentasMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(FerramentasMenuPage),
  ],
})
export class FerramentasMenuPageModule {}
