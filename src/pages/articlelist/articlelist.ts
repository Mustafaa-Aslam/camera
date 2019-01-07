import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticlelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'single-article',
  segment: 'article/'
})
@Component({
  selector: 'page-articlelist',
  templateUrl: 'articlelist.html',
})
export class ArticlelistPage {

  
  
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlelistPage');
  }

}
