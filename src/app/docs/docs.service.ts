import { Injectable } from '@angular/core';
import { DocsModel } from './docs.model';
import { faFolder, faFileInvoice, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import mock from './docs.mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor() { }

  getDocumentsFromId(docId:string|null){
    let documentCollections: DocsModel[] = [];
    let workingDocs = mock.docs;
    
    if(docId != null){
      workingDocs = this.getDocumentChildFromDocId(docId!);
      console.log(workingDocs);
    }

    for(let i = 0; i < workingDocs.length; i++){

      let classValue: string;
      let docIcon: IconDefinition;

      if(workingDocs[i].Type == "Folder"){
        docIcon = faFolder;
        classValue = "explorer-item folder";
      }else{
        docIcon = faFileInvoice;
        classValue = "explorer-item file";
      }

      documentCollections.push(
        new DocsModel(
          workingDocs[i].Id, 
          workingDocs[i].Name,           
          docIcon,
          classValue,
          workingDocs[i].Type)
        );
    }

    return documentCollections.sort((a_doc, b_doc) => {
      if(a_doc.Name < b_doc.Name){
        return -1;
      }if(a_doc.Name > b_doc.Name) {
        return 1;
      }else{
        return 0;
      }
    });
  }

  getDocumentChildFromDocId(docId:string) : any[]{
    let matchedId = false;
    let mockDocs = mock.docs;
    let cDocs : any[] = [];
    let docIndex = 0;
    let docIds = docId.split(".");

    for(let i = 0; i < docIds.length; i++){        
      while(matchedId == false){
        let lookupId = docIds[i];
        if(i != 0){
          lookupId = docIds.slice(0, i+1).join(".");
        }

        matchedId = mockDocs[docIndex].Id == lookupId;

        if(matchedId){
          cDocs = mockDocs[docIndex].cdocs;          

          if((i + 1) != docIds.length){
            mockDocs = cDocs;
            docIndex = -1;
            matchedId = false;

            i++;
          }          
        }

        docIndex++;            
      }
    }

    return cDocs;  
  }
}
