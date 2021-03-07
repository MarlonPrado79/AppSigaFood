import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController } from 'ionic-angular';
import { LoginDTO } from '../../models/login.dto';
import { LoginService } from '../../services/domain/login.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  loginUsuario : LoginDTO = {
    Status: "erro",
    idUsuario: "",
    NomeUsuario: "",
    Login: "",
    Pin: "",
    Senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu:MenuController,
    public loginService: LoginService,
    public altertCtrl: AlertController ) {

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);  /*desabilita a função de arrastar o menu da esquerda para a direita*/
  }

  ionViewDidLeave(){  
    this.menu.swipeEnable(true);  /*após sair da pagina home, ativar função de arrastar o menu*/
  }

  login(){
    this.loginService.findAll(this.loginUsuario.Login, this.loginUsuario.Senha)
    .subscribe(response => {
      console.log(response);
      this.loginUsuario = response;
      console.log(this.loginUsuario.NomeUsuario);
      
      if (this.loginUsuario.Status == "Ok"){
        console.log("Passou " + this.loginUsuario.NomeUsuario),
        this.navCtrl.setRoot("MesasPage")}
      else{
        this.falhaLogin();
        /*console.log("Ouve um erro " + this.loginUsuario.NomeUsuario);*/
      } 

      /*console.log("Houve a resposta 200: " + this.loginUsuario.NomeUsuario);*/
    },
    error => {
      this.falhaLogin();
    });
  }

  async falhaLogin() {
    const alert = await this.altertCtrl.create({
        title: 'Falha de autenticação',
        message: 'Usuário ou senha incorretos',
        enableBackdropDismiss: false,
        buttons: ['Ok']
    });
    await alert.present();
}
}
