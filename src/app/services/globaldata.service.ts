import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  public static userObject:any;
  public static isLogged = false;

  constructor() { }
}
