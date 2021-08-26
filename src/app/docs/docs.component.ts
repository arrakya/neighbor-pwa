import { Component, OnInit } from '@angular/core';
import { DocsModel } from './docs.model';
import { DocsService } from './docs.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { faList, faGripVertical, faHome, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  FaCurrentView = faGripVertical;
  FaHome = faHome;
  FaArrowUp = faArrowUp;

  CurrentViewClass = "explorer list";

  DocsCollection: DocsModel[];

  PathCollection : DocsModel[];

  PathString = "";

  PathCurrent?: DocsModel|null;

  IsShowGoBackItem = false;

  docsService: DocsService;  

  constructor(docsService: DocsService) { 
    this.docsService = docsService;
    this.DocsCollection = [];
    this.PathCollection = [];       
  }

  ngOnInit(): void {
    this.docsService
    	.fetch()
    	.subscribe(data => {
		this.DocsCollection = data;
    	});
  }

  onClickChangeViewIcon(){
    if(this.CurrentViewClass == "explorer icon"){
      this.CurrentViewClass = "explorer list";
      this.FaCurrentView = faList;
    }else{
      this.CurrentViewClass = "explorer icon"
      this.FaCurrentView = faGripVertical;
    }
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
    if(document.Type == "directory"){
      this.PathCollection[this.PathCollection.length] = document;
      this.concatPathString();      
      
      this.PathCurrent = document;
      this.DocsCollection = this.docsService.getChildDocuments(document);

      this.setShowGoBackItem();
    }
  }

  setShowGoBackItem(){
    this.IsShowGoBackItem = this.PathCurrent?.Parent != null;
  }

  onClickGoBackItem(){    

    let parentDocs = this.PathCurrent?.Parent;
    
    if (parentDocs == null){
      return;
    }

    this.DocsCollection = this.docsService.getChildDocuments(parentDocs);
    this.PathCurrent = parentDocs;

    this.setShowGoBackItem();

    this.PathCollection.pop();
    this.concatPathString();
  }
}
