import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {DatasetsInfoComponent} from "./dataset-info/datasets-info.component";
import {DatasetComponent} from "./dataset/dataset.component";


const routes: Routes = [
  {path: 'datasets', component: DatasetsInfoComponent},
  {path: 'datasets/:id', component: DatasetComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
