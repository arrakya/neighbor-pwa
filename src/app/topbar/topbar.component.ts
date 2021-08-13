import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../application/menu.service';
import { MenuModel } from '../application/menu.model'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  collapseExpandedMenuDelay = 500;

  isToggle = false;

  FaChevronCircleDown = faChevronCircleDown  

  Menus : MenuModel[];

  router: Router;

  constructor(menuService: MenuService, router:Router) {     
    this.Menus = menuService.getMenus()
    this.router = router
  }  

  ngOnInit(): void {
  }

  onClickMenu(menuModel: MenuModel){
    this.clearActiveMenu();
    menuModel.ClassValue = "active";
    this.collapseExpandedMenu();

    this.router.navigate([menuModel.RouterLink]);
  }

  clearActiveMenu(){
    for(let i = 0; i < this.Menus.length; i++){
      this.Menus[i].ClassValue = "";
    }
  }

  collapseExpandedMenu(){
    setTimeout(() => {
      this.isToggle = false;  
    }, this.collapseExpandedMenuDelay);
  }

  onToggleChange(isToggle: boolean){
    this.isToggle = isToggle;
  }
}
