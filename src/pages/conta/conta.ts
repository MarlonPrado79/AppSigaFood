import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {

  formGroup: FormGroup
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      nome: ['Cliente preferencial',[Validators.required, Validators.minLength(1), Validators.maxLength(50)] ],
      taxa: ['15',[Validators.required, Validators.minLength(1), Validators.maxLength(50)] ],
      comanda: ['1',[Validators.required, Validators.minLength(1), Validators.maxLength(50)] ]
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

  fazerVenda(){
    console.log("enviou o evento")
  }

}
