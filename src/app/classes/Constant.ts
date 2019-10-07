import { HttpHeaders } from "@angular/common/http";

export class Constant {
  public static API = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6";

  public static headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
}
