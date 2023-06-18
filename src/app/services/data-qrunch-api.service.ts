import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DatasetInfoModel} from "../models/dataset-info-model";
import { Constants } from "../config/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataQrunchApiService {
  public client: HttpClient;
  private constants: Constants;
  constructor(private http: HttpClient) {
    this.client = http;
    this.constants = new Constants();
  }

  getDatasetsList(): Observable<DatasetInfoModel[]> {
    let reqOptions = new HttpHeaders({'session_key': '0110'}) //TODO: INSECURE!
    return this.http.get<DatasetInfoModel[]>(this.constants.API_DATASETS_LIST_ENDPOINT, {'headers': reqOptions});
  }
}
