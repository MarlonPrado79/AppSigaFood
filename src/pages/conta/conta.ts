import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaDTO } from '../../models/conta.dto';
import { MesasDTO } from '../../models/mesas.dto';
import { ContaService } from '../../services/domain/conta.service';
import { MesasService } from '../../services/domain/mesas.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {

  item_mesa: MesasDTO[];
  xx : MesasDTO;
  items: ContaDTO;


  teste: ContaDTO;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contaService: ContaService,
    public mesaService: MesasService,
    public storage : StorageService) {
  }

  ionViewDidLoad() {
    this.items = 
      {
        idcontamesa: '1',
        nummesa: '028',
        idmesa: '23'
      }
    

    //Localiza conta no banco de dados
    let idcontamesa = this.navParams.get('idconta');  //idconta é um parametro enviado pelo push em mesas.ts
    let mesa = this.navParams.get('nummesa');  //nummesa é um parametro enviado pelo push em mesas.ts
  
    console.log("mesa="+mesa);

    //Localizar Mesa
    this.mesaService.findNumMesa(mesa)
      .subscribe(response => {
        this.item_mesa = response; 
        console.log(this.item_mesa);
        this.xx = this.item_mesa[0];
        console.log('so a mesa=' + this.xx.numMesa);
      },
      error => {console.log("Houve erro localiza mesa")});

    
    //Localizar a conta
    this.contaService.findContaMesa(idcontamesa)
      .subscribe(response => {
        this.items = response; 
        console.log(this.items);
      },
      error => {console.log("Houve erro localiza conta")});

  }

  fazerVenda(){
    console.log("enviou o evento")
  }

}
