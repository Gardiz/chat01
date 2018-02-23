import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoConfigPage } from './geo-config';

@NgModule({
  declarations: [
    GeoConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoConfigPage),
  ],
})
export class GeoConfigPageModule {}
