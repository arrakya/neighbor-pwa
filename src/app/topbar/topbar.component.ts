import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../application/menu.service';
import { MenuModel } from '../application/menu.model'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  FaChevronCircleDown = faChevronCircleDown  

  Menus : MenuModel[];

  constructor(menuService: MenuService) {     
    this.Menus = menuService.getMenus()
  }  

  ngOnInit(): void {
  }

}
