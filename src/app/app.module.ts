import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DatasetsInfoComponent } from './dataset-info/datasets-info.component';
import { AppRoutingModule } from './app-routing.module';
import { DatasetComponent } from './dataset/dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsInfoComponent,
    DatasetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
