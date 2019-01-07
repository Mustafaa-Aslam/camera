import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
  img; tempContact;
  constructor(public navCtrl: NavController, private contacts: Contacts, public navParams: NavParams,private camera: Camera) {
  }


   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  getPicture(){
  this.camera.getPicture(this.options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.img = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');

//     let contact: Contact = this.contacts.create();

// contact.name = new ContactName(null, 'Smith', 'John');
// contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
// contact.save().then(
//   () => console.log('Contact saved!', contact),
//   (error: any) => console.error('Error saving contact.', error)
// );
var options = {
  filter : "",
  multiple:true,
  hasPhoneNumber:true	
};


this.contacts.find(["*"],options).then((res) => {
  this.tempContact=res;
})

  }

}
