import { Injectable } from '@angular/core';
import { MenuModel } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus(){
    var menu1 = new MenuModel(1, "Home", "active");
    var menu2 = new MenuModel(2, "Docs", "");
    var menu3 = new MenuModel(3, "Contact", "");

    let menus = [menu1, menu2, menu3];

    return menus;
  }
}
