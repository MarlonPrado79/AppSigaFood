import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MesasDTO } from '../../models/mesas.dto';
import { MesasService } from '../../services/domain/mesas.service';

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
})
export class MesasPage {

  items: MesasDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mesasService: MesasService) {
  }

  ionViewDidLoad() {
    this.mesasService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
    
  }

  showVenda(){
    console.log("clicou");
    console.log(this.items);
    this.navCtrl.push('VendaPage');
  }

  showConta(){
    console.log("clicou");
    this.navCtrl.push('ContaPage');
  }
}
