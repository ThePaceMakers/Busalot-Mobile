import { Component } from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {MapsModalPage} from "../maps-modal/maps-modal";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  routes:any = [];
  from='';
  to='';

  constructor(public navCtrl: NavController, public http: HttpClient, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }



  getRoutes()
  {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });

    const toast = this.toastCtrl.create({
      message: 'Could not find any routes',
      duration: 3000
    });

    loader.present().then(()=>{
      let data = {searchRoutes:true, data:{origin:this.from||'',destination:this.to||''}};
      let options = {headers:{'Content-Type': 'application/json', 'Accept':'application/*'}};
      this.http.post('http://busalot.co.za/backend/mobileApp.php',data,options).subscribe(
        (response:any)=>{
          loader.dismiss();
          if(response.status==='found'){
            this.routes = response.data;
          }
          else {

            toast.present();
          }
        },
        (error)=>{
          loader.dismiss();
        },
      );
    });

  }

  showModal(from, to){
    this.navCtrl.push(MapsModalPage,{from:from,to:to});
  }

}
