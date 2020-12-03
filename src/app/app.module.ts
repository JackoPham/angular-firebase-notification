import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';
import { MessagingService } from './messaging.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
