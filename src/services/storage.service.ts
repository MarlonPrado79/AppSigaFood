import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { ContaMesa } from "../models/conta";
import { UsuarioLogado } from "../models/usuario";

@Injectable()
export class StorageService{

    getUsuario(): UsuarioLogado {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setUsuario(obj: UsuarioLogado) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser)
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
        }

    }

    getContaMesa(): ContaMesa {
        let usr = localStorage.getItem(STORAGE_KEYS.contaMesa);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setContaMesa(obj: ContaMesa) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.contaMesa)
        }
        else {
            localStorage.setItem(STORAGE_KEYS.contaMesa, JSON.stringify(obj))
        }

    }
}