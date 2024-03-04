import {Injectable} from '@angular/core';
import {UPDATE_DOCUMENT} from "../models/mutation.model";
import {Apollo} from "apollo-angular";
import {DocEditorService} from "./doc-editor.service";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MutationService {

  constructor(private apollo: Apollo, private docEditorService: DocEditorService) {
  }

  async updateDoc(content: string) {
    const currentDocument = this.docEditorService.selectedDocument;
    return await lastValueFrom(this.apollo.mutate(
      {
        mutation: UPDATE_DOCUMENT,
        variables: {
          updateDocumentId: currentDocument['_id'],
          title: currentDocument.title,
          content: content
        }
      }));
  }
}
