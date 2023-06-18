import {DatasetColumnMajorModel} from "./dataset-column-major-model";
import {DatasetCellModel} from "./dataset-cell-model";

export class DatasetRowMajorModel {
  public header: string[]
  public data_types: string[]
  public rows: DatasetCellModel[][]

  constructor(columnMajor: DatasetColumnMajorModel) {
    this.header = columnMajor.header;
    this.data_types = columnMajor.data_types
    this.rows = []
    if (columnMajor.columns.length > 0){
      let nRows = columnMajor.columns[0].length
      this.rows = new Array<Array<DatasetCellModel>>(nRows)
      for (let i = 0; i < nRows; i++) {
        this.rows[i] = new Array<DatasetCellModel>(columnMajor.columns.length)
      }
      for (let i = 0; i < columnMajor.columns.length; i++) {
        let col = columnMajor.columns[i]
        if (col.length != nRows) {
          throw RangeError("Not all columns have the same length") //Todo: Handle this error so it doesn't disrupt the user experience. Maybe send to an error endpoint?
        }
        for (let j = 0; j < col.length; j++) {
          this.rows[j][i] = new DatasetCellModel(col[j])
        }
      }
    }
  }
}
