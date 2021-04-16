import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaMesa } from '../../models/conta';
import { MesasDTO } from '../../models/mesas.dto';
import { UsuarioLogado } from '../../models/usuario';
import { MesasService } from '../../services/domain/mesas.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
})
export class MesasPage {

  items: MesasDTO[];
  usuarioLogado: UsuarioLogado;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mesasService: MesasService,
    public storage : StorageService) {
  }

  ionViewDidLoad() {
    //Localiza mesas no banco de dados
    this.mesasService.findAll()
      .subscribe(response => {
        this.items = response;
        console.log(this.items);
      },
      error => {});

      this.usuarioLogado = this.storage.getUsuario()

      if (this.usuarioLogado && this.usuarioLogado.nomeusuario) {
        console.log('Mostrando usuario= '+this.usuarioLogado.nomeusuario);
      }

  }

  showClickMesa(idcontamesa, idmesa, nummesa : string){
    let conta : ContaMesa = {
      idcontamesa : idcontamesa,
      idmesa: idmesa,
      nummesa: nummesa};

      
    this.storage.setContaMesa(conta);

    
    //if (idcontamesa == '0'){
      this.navCtrl.push('ContaPage', {nummesa: nummesa, idconta: idcontamesa});
    //}
    //else{
    // this.navCtrl.push('VendaPage');
    //}

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
