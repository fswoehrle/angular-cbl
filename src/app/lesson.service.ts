import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CblLesson } from './core/model/cblLesson.model';


@Injectable({
  providedIn: "root"
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getCurrentLesson(bookID: String): Observable<CblLesson[]> {
    return this.getLessons("3","1");
  }

  getLessons(bookID: String, lessonID: String): Observable<CblLesson[]> {

    let id: Number = Number(bookID) * 100 + Number(lessonID);
    let url = "assets/" + id + ".json";

    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new CblLesson(item.id, item.cblType, item.language, item.book, item.year, item.lessonNumber, item.lessonTitle, item.paragraphs)
          )
        )
      );
  }
}
