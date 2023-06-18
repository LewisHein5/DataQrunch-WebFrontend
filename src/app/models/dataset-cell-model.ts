export class DatasetCellModel {
  public value: string = ""
  constructor(val?: string) {
    if (val == null)
    {
      this.value = ""
    }
    else {
      this.value = val;
    }
  }
}
