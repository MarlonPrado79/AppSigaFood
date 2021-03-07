import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class VendaService{

    constructor(public http: HttpClient){
    }

    findByCardapio(idvenda: string){
        return this.http.get(`${API_CONFIG.baseUrl}/ListaMesas`);

    }
}