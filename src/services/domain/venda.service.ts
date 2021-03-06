import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs";
import { ContaDTO } from "../../models/conta.dto";

@Injectable()
export class VendaService{

    constructor(public http: HttpClient){
    }

    findContaMesa(sID: string): Observable<ContaDTO[]>{
        return this.http.get<ContaDTO[]>(`${API_CONFIG.baseUrl}/ConsultaContaMesa?idContaMesa=${sID}`);
    }

}