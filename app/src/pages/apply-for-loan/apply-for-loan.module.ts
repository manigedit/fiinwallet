import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyForLoanPage } from './apply-for-loan';

@NgModule({
  declarations: [
    ApplyForLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyForLoanPage),
  ],
})
export class ApplyForLoanPageModule {}
