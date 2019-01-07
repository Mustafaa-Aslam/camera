import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  rForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder, public user:UserServiceProvider) {
    this.rForm = fb.group({
      
      'Password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'Email': [null, Validators.compose([ Validators.email])]
      
    });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(post){
    this.user.loginUser(post);
    console.log(post);
    this.navCtrl.push(DashboardPage);
  }
}
