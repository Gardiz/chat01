import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoMenuPage } from './geo-menu';

@NgModule({
  declarations: [
    GeoMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoMenuPage),
  ],
})
export class GeoMenuPageModule {}
