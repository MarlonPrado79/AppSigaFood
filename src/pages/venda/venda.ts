import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendaDTO } from '../../models/venda.dto';
import { StorageService } from '../../services/storage.service';

/* */

@IonicPage()
@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html',
})
export class VendaPage {

  items : VendaDTO;
  nomeusuario : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage : StorageService) {
  }

  ionViewDidLoad() {

    let UsuarioLogado = this.storage.getUsuario().nomeusuario;

    if (UsuarioLogado && UsuarioLogado){
      this.nomeusuario = UsuarioLogado;
    }

    console.log('UsuarioLogado 1='+UsuarioLogado);
    console.log('UsuarioLogado 2='+this.nomeusuario);


    this.items = {
      idVenda:"1",
      numMesa:'001'
    }
  };

}
