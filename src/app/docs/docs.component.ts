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

  PathCollection : DocsModel[];

  PathString = "";

  PathCurrent?: DocsModel|null;

  IsShowGoBackItem = false;

  docsService: DocsService;  

  constructor(docsService: DocsService) { 
    this.docsService = docsService;
    this.DocsCollection = docsService.getDocumentsFromId(null);

    this.PathCollection = [];       
  }

  ngOnInit(): void {
  }

  concatPathString(){
    this.PathString = "";
    this.PathCurrent = null;
    if(this.PathCollection.length > 1){
      for(let i = 0; i < (this.PathCollection.length - 1); i++){    
        this.PathString += this.PathCollection[i].Name;
        this.PathString += " / ";
      }    
    }

    this.PathCurrent = this.PathCollection[this.PathCollection.length - 1];    
  }

  onClickExploreItem(document: DocsModel){
    if(document.Type == "Folder"){
      this.PathCollection[this.PathCollection.length] = document;
      this.concatPathString();
      this.setShowGoBackItem();
    
      this.DocsCollection = this.docsService.getDocumentsFromId(document.Id);
    }
  }

  setShowGoBackItem(){
    this.IsShowGoBackItem = this.PathCollection.length > 0;
  }

  onClickGoBackItem(){    
    this.PathCollection.pop();
    this.concatPathString();
    this.setShowGoBackItem();
    
    if(this.PathCollection.length == 0){
      this.DocsCollection = this.docsService.getDocumentsFromId(null);  
      return;
    }

    let previousDocId = this.PathCollection[this.PathCollection.length - 1].Id;
    this.DocsCollection = this.docsService.getDocumentsFromId(previousDocId);
  }
}
