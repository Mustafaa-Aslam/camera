import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {RegisterPage} from '../pages/register/register';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AboutusPage} from '../pages/aboutus/aboutus';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticlelistPage } from '../pages/articlelist/articlelist';
import { ArticlelistPageModule } from '../pages/articlelist/articlelist.module';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { ContactsPage } from '../pages/contacts/contacts';
import { LocalNotifications } from '@ionic-native/local-notifications';

var firebaseConfig= {

  apiKey: "AIzaSyBdjBfFHWnOjuzO5wYo29W-SoLgMjs-DAM",
  authDomain: "budgettracker-7b97f.firebaseapp.com",
  databaseURL: "https://budgettracker-7b97f.firebaseio.com",
  projectId: "budgettracker-7b97f",
  storageBucket: "budgettracker-7b97f.appspot.com",
  messagingSenderId: "741792716593"
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    AboutusPage,
    LoginPage,
    DashboardPage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ArticlelistPageModule,AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage,
    ListPage,
    AboutusPage,
    ArticlelistPage,
    DashboardPage,
    LoginPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AngularFireAuth,
    LocalNotifications 
  ]
})
export class AppModule {}
