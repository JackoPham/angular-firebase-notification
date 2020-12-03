import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireMessaging: AngularFireMessaging
  ) {}

  // tslint:disable-next-line: typedef
  requestPermission(userId: string) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  // tslint:disable-next-line: typedef
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      console.log('new message received. ', payload);
      this.currentMessage.next(payload);
    });
  }
}
