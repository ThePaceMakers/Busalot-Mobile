import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsModalPage } from './maps-modal';

@NgModule({
  declarations: [
    MapsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsModalPage),
  ],
})
export class MapsModalPageModule {}
