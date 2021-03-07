import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendaDTO } from '../../models/venda.dto';

/* */

@IonicPage()
@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html',
})
export class VendaPage {

  items : VendaDTO;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendaPage');

    this.items = {
      idVenda:"1",
      numMesa:'001'
    }
  };

}
