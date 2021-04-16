import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { MesasDTO } from "../../models/mesas.dto";
import { Observable } from "rxjs/Rx";
import { ContaDTO } from "../../models/conta.dto";

@Injectable()
export class ContaService{

    constructor(public http: HttpClient){
    }

    findContaMesa(sID: string): Observable<ContaDTO>{
        return this.http.get<ContaDTO>(`${API_CONFIG.baseUrl}/ConsultaContaMesa?idContaMesa=${sID}`);
    }

}