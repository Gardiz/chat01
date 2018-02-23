import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatContatosPage } from './chat-contatos';

@NgModule({
  declarations: [
    ChatContatosPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatContatosPage),
  ],
})
export class ChatContatosPageModule {}
