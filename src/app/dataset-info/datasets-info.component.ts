import { Component } from '@angular/core';
import { DataQrunchApiService } from "../services/data-qrunch-api.service";
import {DatasetInfoModel} from "../models/dataset-info-model";

@Component({
  selector: 'app-dataset-info',
  templateUrl: './datasets-info.component.html',
  styleUrls: ['./datasets-info.component.css']
})
export class DatasetsInfoComponent {
  datasets_info: DatasetInfoModel[] = []

  constructor(private apiService: DataQrunchApiService) {
    this.apiService.getDatasetsList().subscribe( dInfo => {this.datasets_info = dInfo});
  }

}

class DatasetInfo {
  id: string;
  size: number

  constructor(id: string, size: number) {
    this.id = id;
    this.size = size;
  }
}
