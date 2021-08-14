import { Injectable } from '@angular/core';
import { DocsModel } from './docs.model';
import { faFileWord, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor() { }

  getDocuments(){
    let docs = [
      new DocsModel(1, "Folder with very very long name", faFileWord, "explorer-item folder"),
      new DocsModel(2, "Folder 2", faFileWord, "explorer-item folder"),
      new DocsModel(3, "Folder 3", faFileWord, "explorer-item folder"),
      new DocsModel(4, "Folder 4", faFileWord, "explorer-item folder"),
      new DocsModel(5, "Folder 5", faFileWord, "explorer-item folder"),
      new DocsModel(6, "Folder 6", faFileWord, "explorer-item folder"),
      new DocsModel(7, "Folder 7", faFileWord, "explorer-item folder"),
      new DocsModel(8, "Folder 8", faFileWord, "explorer-item folder"),
      new DocsModel(9, "Folder 9", faFileWord, "explorer-item folder"),
      new DocsModel(10, "Folder 10", faFileWord, "explorer-item folder"),
      new DocsModel(11, "Folder 11", faFileWord, "explorer-item folder"),
      new DocsModel(12, "Folder 12", faFileWord, "explorer-item folder"),
      new DocsModel(13, "File with very long long name", faFileInvoice, "explorer-item file"),
      new DocsModel(14, "File 2", faFileInvoice, "explorer-item file"),
      new DocsModel(15, "File 3", faFileInvoice, "explorer-item file"),
      new DocsModel(16, "File 4", faFileInvoice, "explorer-item file"),
      new DocsModel(17, "File 5", faFileInvoice, "explorer-item file"),
      new DocsModel(18, "File 6", faFileInvoice, "explorer-item file"),
      new DocsModel(19, "File 7", faFileInvoice, "explorer-item file"),
      new DocsModel(20, "File 8", faFileInvoice, "explorer-item file"),
      new DocsModel(21, "File 9", faFileInvoice, "explorer-item file"),
      new DocsModel(22, "File 10", faFileInvoice, "explorer-item file")
    ] 

    return docs;
  }
}
