import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  data = { title:'', description:'', date:'', time:'' };
  constructor(public navCtrl: NavController,private localNotifications: LocalNotifications,private storage: Storage, public navParams: NavParams,private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
    this.storage.set('name', 'Max');

  }

  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       at: date,
       led: 'FF0000'
       //sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }
  setSound() {
    // if (this.platform.is('android')) {
    //   return 'file://assets/sounds/Rooster.mp3'
    // } else {
    //   return 'file://assets/sounds/Rooster.caf'
    // }
  }
  get(){
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });
    console.log(this.data)
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      at: this.data.date,
      // sound:  'file://sound.mp3': 'file://beep.caf',
      
      data: {  }
    });
  }


 
  // Or to get a key/value pair
  

}
