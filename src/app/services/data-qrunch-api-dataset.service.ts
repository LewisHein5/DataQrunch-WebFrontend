import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Constants} from "../config/constants";
import {DatasetColumnMajorModel} from "../models/dataset-column-major-model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataQrunchApiDatasetService {
  private client: HttpClient;
  private constants: Constants;

  constructor(private http: HttpClient) {
    this.client = http;
    this.constants = new Constants();
  }

  getDataset(id: String): Observable<DatasetColumnMajorModel> {
    let reqOptions = new HttpHeaders({'session_key': '0010'});//TODO: Insecure
    return this.http.get<DatasetColumnMajorModel>(
      this.constants.API_DATASETS_ENDPOINT+"/"+id,
      {'headers': reqOptions}
    )
  }
}
