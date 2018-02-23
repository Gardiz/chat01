import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatConfigPage } from './chat-config';

@NgModule({
  declarations: [
    ChatConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatConfigPage),
  ],
})
export class ChatConfigPageModule {}
