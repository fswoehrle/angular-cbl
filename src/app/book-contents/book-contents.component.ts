import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { LessonService } from "../lesson.service";
import { Observable } from 'rxjs';

import { CblContent } from '../core/model/cblContent.model';
import { ContentService } from '../content.service';

@Component({
  selector: "app-book-contents",
  templateUrl: "./book-contents.component.html",
  styleUrls: ["./book-contents.component.css"]
})
export class BookContentsComponent implements OnInit {
  //content: Observable<CblContent[]>;
  loading: Boolean = false;
  errorMessage: String = '';
  //a: CblContent;
  //b: CblContent;
  contentArray: CblContent[] = [];
  //content:CblContent;

  constructor(
    private route: ActivatedRoute, 
    private contentService: ContentService
    //private lessonService: LessonService
    ) {}

  ngOnInit() {
    this.loading = true;

    // First get the book id from the current route.
    const bookId = this.route.snapshot.paramMap.get("bookId");
    //console.log("bookid: " + bookId)

    //this.loading = true;

    //this.content = this.contentService.list(bookId);

    this.contentService.list(bookId)
      .subscribe(
        (response) => {
          this.contentArray = response;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      )

      console.log("contentArray: " + this.contentArray[0]);
    
    //this.loading = false;
    

/*    
    this.lessonService.getContents(bookId)
      .subscribe(
        (response) => {
          this.content = response;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      )
      */
  }

}
