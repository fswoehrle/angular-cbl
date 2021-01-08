import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CblBook } from "./core/model/cblBook.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CblBookService {

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<CblBook[]> {

    let url = "assets/cbl_books.json";

    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new CblBook(item.id, item.cblType, item.language, item.name, item.description, item.image, item.contents_id)
          )
        )
      );
  }
}