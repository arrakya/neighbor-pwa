import { Injectable } from '@angular/core';
import { DocsModel } from './docs.model';
import { faFolder, faFileInvoice, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import mock from './docs.mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor() { }

  getChildDocuments(doc: any) {
    let childDocs: any[] = [];
    let docs: any[] = [];

    if (!doc) {
      docs = mock
    }else{
      docs = doc.RawChilds
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

      if(docName == "groove_ville"){
        docName = ""
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
