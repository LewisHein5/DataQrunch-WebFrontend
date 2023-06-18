import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DataQrunchApiDatasetService} from "../services/data-qrunch-api-dataset.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators"
import {DatasetColumnMajorModel} from "../models/dataset-column-major-model";
import {DatasetRowMajorModel} from "../models/dataset-row-major-model";
import {DatasetCellModel} from "../models/dataset-cell-model";

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent {
  public static MaxColumns: number = 50;
  public static MaxRows: number = 100;
  get MaxColumns(): number { //TODO: Instead of creating all the cells at once, should be lazy about it
    return DatasetComponent.MaxColumns;
  }
  get MaxRows(): number {
    return DatasetComponent.MaxRows;
  }

  public dataset!: DatasetRowMajorModel; //TODO: Do I have to use the null-forgiving operator here???
  get DatasetNRows(): number {
    return this.dataset.rows.length;
  }
  get DatasetNCols(): number {
    return this.dataset.rows[0].length;
  }

  private route: ActivatedRoute;
  private router: Router;
  private apiService: DataQrunchApiDatasetService;
  private editableCell: [number, number] = [NaN, NaN]

  constructor(
    private rt: ActivatedRoute,
    private rtr: Router,
    private service: DataQrunchApiDatasetService
    ) {
    this.route = rt;
    this.router = rtr;
    this.apiService = service;
  }

  public range(start: number, end: number): number[] {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }//TODO: Use a generator

  private cellHasData(pos: [number, number]): boolean {
    let col = pos[0];
    let row = pos[1];

    return col < this.DatasetNCols && row < this.DatasetNRows
  }
  public getCellContents(pos: [number, number]): string {
    let col = pos[0];
    let row = pos[1];

    if (this.cellHasData(pos)) {
      return this.dataset.rows[row][col].value;
    }

    return ""
  }

  public getCellStyle(pos: [number, number]): string {
    return this.cellHasData(pos) ? "hasData" : "noData"
  }
  public makeCellEditable(pos: [number, number]) {
    this.editableCell = pos
  }

  public exitCellEditable(pos: [number, number]) {
    this.editableCell = [NaN, NaN]
  }

  public isCellEditable(pos: [number, number]) {
    if (this.editableCell.every((val, ind) => Number.isNaN(val))) return false;
    return this.editableCell.every((val, ind) => val == pos[ind])
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getDataset(params.get('id')!)) //TODO: Can we not use the null-forgiving operator here?
    ).subscribe((columnMajor) => { this.dataset = new DatasetRowMajorModel(columnMajor)});
  }
}
