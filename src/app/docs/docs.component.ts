import { Component, OnInit } from '@angular/core';
import { DocsModel } from './docs.model';
import { DocsService } from './docs.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  docsCollection: DocsModel[];

  constructor(docsService: DocsService) { 
    this.docsCollection = docsService.getDocuments();
  }

  ngOnInit(): void {
  }

}
