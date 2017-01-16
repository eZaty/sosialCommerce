import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecommendedPage } from '../recommended/recommended';
import { InvitefriendPage } from '../invitefriend/invitefriend';
import { InboxPage } from '../inbox/inbox';
import { MylikePage } from '../mylike/mylike';

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {

  constructor(public navCtrl: NavController) {

  }
recommended(){
  this.navCtrl.push( RecommendedPage );

}
invitefriend(){
  this.navCtrl.push( InvitefriendPage );
}
mylike(){
  this.navCtrl.push( MylikePage );
}
inbox(){
  this.navCtrl.push( InboxPage );
}
}
