import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { LessonService } from "../lesson.service";

@Component({
  selector: "app-book-contents",
  templateUrl: "./book-contents.component.html",
  styleUrls: ["./book-contents.component.css"]
})
export class BookContentsComponent implements OnInit {
  contents: Observable<Object>;

  constructor(
    private route: ActivatedRoute, 
    private lessonService: LessonService
    ) {}

  ngOnInit() {
    // First get the book id from the current route.
    const bookId = this.route.snapshot.paramMap.get("bookId");
    this.contents = this.lessonService.getContents(bookId);
  }
}
