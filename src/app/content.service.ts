import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CblContent } from "./core/model/cblContent.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ContentService {

  constructor(private http: HttpClient) {}

  list(bookID: String): Observable<CblContent[]> {

    let id: Number = Number(bookID) * 100;
    let url = "assets/" + id + ".json";

    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new CblContent(item.id, item.cblType, item.language, item.book, item.bookId, item.year, item.items)
          )
        )
      );
  }
}