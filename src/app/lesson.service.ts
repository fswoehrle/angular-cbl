import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CblContent } from './core/model/cblContent.model';

@Injectable({
  providedIn: "root"
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getCurrentLesson(bookID: String) {
    //TODO: die current lesson id berechnen!
    return this.http.get("assets/301.json");
  }

  getLesson(bookID: String, LessonID: String) {
    let id: Number = Number(bookID) * 100 + Number(LessonID);
    return this.http.get("assets/" + id + ".json");
  }

  getBooks() {
    return this.http.get("assets/cbl_books.json");
  }


  getContents(bookID: String) {
    // now returns an Observable of Config
    let id: Number = Number(bookID) * 100;
    return this.http.get<CblContent>("assets/" + id + ".json")
  }



  /*
  getContents(bookID: String): Observable<Content> {
    let id: Number = Number(bookID) * 100;
    return this.http.get<Content>("assets/" + id + ".json")
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      error.status + ", " + error.error.message);
  }
  */
}
