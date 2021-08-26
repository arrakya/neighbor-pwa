import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { DocsModel } from './docs.model';
import { faFolder, faFileInvoice, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import mock from './docs.mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  baseDocs : any[];

  constructor(private http: HttpClient) {
	this.baseDocs = []; 
  }

  fetch(){ 
  	console.log("fetch Docs from api.")

        return this.http.get('http://localhost:8080/', {
		observe: 'body',
		responseType: 'json' as const
        })
	.pipe(map(resp => {
		this.baseDocs = (resp as any).docs;	
		
		return this.getChildDocuments(null);
	}));
  }

  getChildDocuments(doc: any) {
    let childDocs: any[] = [];
    let docs: any[] = this.baseDocs; 

    if(doc){
	docs = doc.RawChilds;		
    }

    if (docs == null) {
	return childDocs
    }
   
    docs.forEach((item) => {

      if (item.type == "report") {
        return;
      }

      let classValue: string;
      let docIcon: IconDefinition;

      if (item.type == "directory") {
        docIcon = faFolder;
        classValue = "explorer-item folder";
      } else {
        docIcon = faFileInvoice;
        classValue = "explorer-item file";
      }

      let docName = item.name ? item.name : ""

      if(docName.indexOf("groove_ville") > -1){
        docName = "Groove Vile"
      }

      childDocs.push(new DocsModel(
        "",
        docName,
        docIcon,
        classValue,
        item.type,
        item.contents,
        doc))
    })

    return childDocs;
  }  
}
