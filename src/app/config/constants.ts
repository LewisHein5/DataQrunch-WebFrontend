import {Injectable} from "@angular/core";

@Injectable()
export class Constants {
  public readonly API_DATASETS_LIST_ENDPOINT: string = 'http://localhost:8080/datasets'
  public readonly API_DATASETS_ENDPOINT: string = 'http://localhost:8080/datasets'
}
