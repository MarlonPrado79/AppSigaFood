import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { LoginDTO } from "../../models/login.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService{
    constructor(public http: HttpClient){
    }

    findAll(login: string, senha: string) : Observable<LoginDTO>{
        return this.http.get<LoginDTO>(`${API_CONFIG.baseUrl}/ValidaLogin?Login=${login}&Senha=${senha}`);
    }
}