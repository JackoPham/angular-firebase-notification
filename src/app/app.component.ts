import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firebase-notification';
  constructor(private messagingService: MessagingService) {
    this.messagingService.requestPermission('userId');
  }
}
