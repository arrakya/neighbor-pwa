import { Injectable } from '@angular/core';
import { DocsModel } from './docs.model';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor() { }

  getDocuments(){
    let docs = [
      new DocsModel(1, "Folder 1", faFolder, "explorer-item folder"),
      new DocsModel(2, "Folder 2", faFolder, "explorer-item folder"),
      new DocsModel(3, "Folder 3", faFolder, "explorer-item folder"),
      new DocsModel(4, "Folder 4", faFolder, "explorer-item folder"),
      new DocsModel(5, "Folder 5", faFolder, "explorer-item folder"),
      new DocsModel(6, "Folder 6", faFolder, "explorer-item folder"),
      new DocsModel(7, "Folder 7", faFolder, "explorer-item folder"),
      new DocsModel(8, "Folder 8", faFolder, "explorer-item folder"),
      new DocsModel(9, "Folder 9", faFolder, "explorer-item folder"),
      new DocsModel(10, "Folder 10", faFolder, "explorer-item folder"),
      new DocsModel(11, "Folder 11", faFolder, "explorer-item folder"),
      new DocsModel(12, "Folder 12", faFolder, "explorer-item folder"),
      new DocsModel(13, "File 1", faFile, "explorer-item file"),
      new DocsModel(14, "File 2", faFile, "explorer-item file"),
      new DocsModel(15, "File 3", faFile, "explorer-item file"),
      new DocsModel(16, "File 4", faFile, "explorer-item file"),
      new DocsModel(17, "File 5", faFile, "explorer-item file"),
      new DocsModel(18, "File 6", faFile, "explorer-item file"),
      new DocsModel(19, "File 7", faFile, "explorer-item file"),
      new DocsModel(20, "File 8", faFile, "explorer-item file"),
      new DocsModel(21, "File 9", faFile, "explorer-item file"),
      new DocsModel(22, "File 10", faFile, "explorer-item file")
    ] 

    return docs;
  }
}
