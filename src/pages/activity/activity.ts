import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Browse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  // images: Array<string>;
  // grid: Array<Array<string>>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.images = this.navParams.get('images');//get file URIs
    // this.grid = Array(Math.ceil(this.images.length/2));//Maths
  }

  ionViewDidLoad() {
  //   let rowNum = 0; //counter to iterate over the rows in the grid
  //
  // for (let i = 0; i < this.images.length; i+=2) { //iterate images
  //
  //   this.grid[rowNum] = Array(2); //declare two elements per row
  //
  //   if (this.images[i]) { //check file URI exists
  //     this.grid[rowNum][0] = this.images[i] //insert image
  //   }
  //
  //   if (this.images[i+1]) { //repeat for the second image
  //     this.grid[rowNum][1] = this.images[i+1]
  //   }
  //
  //   rowNum++; //go on to the next row
  // }
  }


}
