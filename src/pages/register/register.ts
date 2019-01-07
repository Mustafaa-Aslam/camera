import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   user: firebase.User;
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  Password:string = '';
  Username:string = '';
  titleAlert:string = 'This field is required';
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public navParams: NavParams, private fb:FormBuilder, public user1:UserServiceProvider) {
    this.rForm = fb.group({
      
      'Password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'Name': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'Email': [null, Validators.compose([ Validators.email])],
      'RePassword': [null, Validators.compose([Validators.required])]
    });

    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  
  signInWithEmail(credentials) {
		console.log('Sign in with email');
		 this.afAuth.auth.signInWithEmailAndPassword(credentials.Email,
			 credentials.Password).then(
        (
          res
        ) => {
          console.log(res);
        }
       );
	}


}
