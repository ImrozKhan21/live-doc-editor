import {Component, OnInit} from '@angular/core';
import {QueryService} from "../../services/query.service";
import {lastValueFrom} from "rxjs";
import {DocEditorService} from "../../services/doc-editor.service";

@Component({
  selector: 'app-doc-selector',
  templateUrl: './doc-selector.component.html',
  styleUrls: ['./doc-selector.component.scss']
})
export class DocSelectorComponent implements OnInit {
  documents: any;
  selectedDocument: any;

  constructor(private queryService: QueryService, private docEditorService: DocEditorService) {
  }

  async ngOnInit() {
    this.queryService.getDocuments().subscribe((data) => {
      this.documents = data;
      this.selectedDocument = this.documents[0];
      this.docEditorService.selectedDocument = this.selectedDocument;
      this.docEditorService.joinDocument(this.selectedDocument['_id']);
    });

  }

}
