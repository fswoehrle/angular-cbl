import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LessonService {

  constructor(private http: HttpClient) {}

  getCurrentLesson(bookID:String) {
    //TODO: die current lesson id berechnen!
    return this.http.get("assets/301.json");
  }

  getLesson(bookID:String, LessonID:String) {
    let id: Number = Number(bookID) * 100 + Number(LessonID);
    return this.http.get("assets/" + id + ".json");
  }

  getBooks() {
    return this.http.get("assets/cbl_books.json");
  }

  getContents(bookID:String) {
    let id: Number = Number(bookID) * 100;
    return this.http.get("assets/" + id + ".json");
  }
}
