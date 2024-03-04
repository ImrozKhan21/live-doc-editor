import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, of, switchMap} from "rxjs";
import {QueryService} from "../../services/query.service";
import {MutationService} from "../../services/mutation.service";

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.scss']
})
export class DocEditorComponent implements OnInit {
  apiKey = "f2uc4rzlhp9o9wtra8zmxxcr6nclfwxgdto6qabmoyhoj9vz";
  dataModel: any;
  docField: any;
  docForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private mutationService: MutationService) {
  }

  ngOnInit() {
    this.docField = new FormControl();
    this.docForm = this.fb.group({docControl: this.docField});
    this.docField.valueChanges.pipe(
      debounceTime(400),
      switchMap( (content: any) => {
        return of(content)
      })
    ).subscribe(async (content: string) => {
      await this.mutationService.updateDoc(content);
    });
  }

  onDataChange(event: any) {
    console.log(event);
    this.dataModel = event;
  }
}
