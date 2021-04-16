import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { MesasDTO } from "../../models/mesas.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class MesasService{

    constructor(public http: HttpClient){
    }

    findAll() : Observable<MesasDTO[]>{
        return this.http.get<MesasDTO[]>(`${API_CONFIG.baseUrl}/ListaMesas`);
    }

    findNumMesa(numMesa: string) : Observable<MesasDTO[]>{
        return this.http.get<MesasDTO[]>(`${API_CONFIG.baseUrl}/ListaMesas?numMesa=${numMesa}`);
    }
}