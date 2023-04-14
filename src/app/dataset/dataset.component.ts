import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DataQrunchApiDatasetService} from "../services/data-qrunch-api-dataset.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators"
import {DatasetColumnMajorModel} from "../models/dataset-column-major-model";
import {DatasetRowMajorModel} from "../models/dataset-row-major-model";

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent {
  public dataset!: DatasetRowMajorModel; //TODO: Do I have to use the null-forgiving operator here???
  private route: ActivatedRoute;
  private router: Router;
  private apiService: DataQrunchApiDatasetService;

  constructor(
    private rt: ActivatedRoute,
    private rtr: Router,
    private service: DataQrunchApiDatasetService
    ) {
    this.route = rt;
    this.router = rtr;
    this.apiService = service;
  }

  public makeCellEditable(row: number, col: number) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getDataset(params.get('id')!)) //TODO: Can we not use the null-forgiving operator here?
    ).subscribe((columnMajor) => { this.dataset = new DatasetRowMajorModel(columnMajor)});
  }
}
