import { Component, OnInit } from '@angular/core';
import { DocsModel } from './docs.model';
import { DocsService } from './docs.service';
import { faHome, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  FaHome = faHome;
  FaArrowUp = faArrowUp;

  DocsCollection: DocsModel[];

  PathCollection : string[];

  PathString = "";

  PathCurrent = "";

  IsShowGoBackItem = false;

  constructor(docsService: DocsService) { 
    this.DocsCollection = docsService.getDocuments();

    this.PathCollection = [];       
  }

  ngOnInit(): void {
  }

  concatPathString(){
    this.PathString = "";
    this.PathCurrent = "";
    if(this.PathCollection.length > 1){
      for(let i = 0; i < (this.PathCollection.length - 1); i++){    
        this.PathString += this.PathCollection[i];
        this.PathString += " / ";
      }    
    }

    this.PathCurrent = this.PathCollection[this.PathCollection.length - 1];
  }

  onClickExploreItem(document: DocsModel){
    this.PathCollection[this.PathCollection.length] = document.Name;
    this.concatPathString();
    this.setShowGoBackItem();    
  }

  setShowGoBackItem(){
    this.IsShowGoBackItem = this.PathCollection.length > 0;
  }

  onClickGoBackItem(){    
    this.PathCollection.pop();
    this.concatPathString();
    this.setShowGoBackItem();
    console.log(this.PathCollection);
  }
}
