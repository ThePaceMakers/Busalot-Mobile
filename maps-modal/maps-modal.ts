import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

/**
 * Generated class for the MapsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-modal',
  templateUrl: 'maps-modal.html',
})
export class MapsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
  }

  mapsURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/directions?key=AIzaSyC3HZNneU2f0SwDVUswB1tp0HTyFdFXIq4&origin='+this.navParams.get('from')+'&destination='+this.navParams.get('to')+'&zoom=6');
  }

}
