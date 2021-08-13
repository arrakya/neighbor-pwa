import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  FaChevronCircleDown = faChevronCircleDown  

  constructor() { }

  ngOnInit(): void {
  }

}
