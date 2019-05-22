import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeticionesService{
  public url: string;
  constructor(private _http: HttpClient){
    this.url="https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(){
  return 'Hola mundo desde el servicio.';
  }

  getArticulos(){
    return this._http.get(this.url);
  }


}
