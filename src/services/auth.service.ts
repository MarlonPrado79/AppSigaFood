import { Injectable } from "@angular/core";
import { LoginDTO } from "../models/login.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { UsuarioLogado } from "../models/usuario";
import { StorageService } from "./storage.service";
 
@Injectable()
export class AuthService{

    constructor(public http: HttpClient, 
                public storage : StorageService){
    }

    authenticate(login: LoginDTO){
        return this.http.get<LoginDTO>(
            `${API_CONFIG.baseUrl}/ValidaLogin?Login=${login.Login}&Senha=${login.Senha}`);
    }

    successfullLogin(idUsuario, nomeUsuario: string){
        let user : UsuarioLogado = {
            idusuario : idUsuario,
            nomeusuario : nomeUsuario
        };
        this.storage.setUsuario(user);
    }

    logout(){
        this.storage.setUsuario(null);
    }


}