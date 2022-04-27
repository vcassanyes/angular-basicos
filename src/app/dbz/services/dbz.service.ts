import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor() {
        console.log('Servicio inicializado');
    }

    private _personajes: Personaje[]=[
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
        {
          nombre: 'Krillin',
          poder: 750
        }
      ];
    
      get personajes(): Personaje[] {
          return [...this._personajes];
      }
      
      agregarPersonaje(argumento: Personaje) {
        this._personajes.push(argumento);
      }
}