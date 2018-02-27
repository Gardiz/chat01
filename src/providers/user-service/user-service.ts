import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { AngularFireDatabase } from "angularfire2/database"; //para Firebase

import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceProvider {

  users: Observable<User[]>;

  constructor(
    public db: AngularFireDatabase  //para Firebase
    //, public afAuth: AngularFireAuth //para Firebase
    //, public db: AngularFireDatabase //para Firebase
    //, public firebaseApp: FirebaseApp //para Firebase
  ) {
    console.log('Hello UserServiceProvider Provider');
  }

  //O PROBLEMA QUE SEMPRE SOBRESCREVE O VALOR NO bd
 create(user: User): Promise<void> {
  return this.db.object('/users')
  .set(user)
  .catch();

 // create(user: User, uuid: string): Promise<void> {
 // return this.db.object(`/users/${uuid}`)
 // .set(user)
 // .catch();

  }
}


