import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { DocEditorComponent } from './components/doc-editor/doc-editor.component';
import { DocSelectorComponent } from './components/doc-selector/doc-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DocEditorComponent,
    DocSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
