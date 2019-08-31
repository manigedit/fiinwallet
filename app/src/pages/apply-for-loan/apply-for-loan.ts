import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplyForLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'apply-for-loan'
})
@Component({
  selector: 'page-apply-for-loan',
  templateUrl: 'apply-for-loan.html',
})
export class ApplyForLoanPage {
  loans: any;
  purposes: any;
  currency: any;
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyForLoanPage');
  }

}
