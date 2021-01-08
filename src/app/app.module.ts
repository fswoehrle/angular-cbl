import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookContentsComponent } from "./book-contents/book-contents.component";
import { BookLessonComponent } from "./book-lesson/book-lesson.component";
import { LessonService } from "./lesson.service";
import { ContentService } from './content.service';
import { CblBookService } from './book.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: BookListComponent },
      { path: "bookContents/:bookId", component: BookContentsComponent },
      { path: "bookLesson/:bookId/:lessonId", component: BookLessonComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BookListComponent,
    BookContentsComponent,
    BookLessonComponent
  ],
  bootstrap: [AppComponent],
  providers: [LessonService, ContentService, CblBookService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
