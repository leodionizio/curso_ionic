import { ConfigPage } from './../pages/config/config';
import { LifecycleEventsPage } from './../pages/lifecycle-events/lifecycle-events';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from './../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [MyApp, HomePage, ListPage, ContactPage, LifecycleEventsPage, ConfigPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // mode: 'md'
      platforms: {
        android: {
          mode: 'ios',
        },
        ios: {
          mode: 'md'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, ContactPage, LifecycleEventsPage, ConfigPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
