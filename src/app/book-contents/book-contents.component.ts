import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CblContent } from '../core/model/cblContent.model';
import { ContentService } from '../content.service';

@Component({
  selector: "app-book-contents",
  templateUrl: "./book-contents.component.html",
  styleUrls: ["./book-contents.component.css"]
})
export class BookContentsComponent implements OnInit {
  loading: Boolean = false;
  errorMessage: String = '';
  contentArray: CblContent[] = [];

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.loading = true;

    // First get the book id from the current route.
    const bookId = this.route.snapshot.paramMap.get("bookId");

    this.contentService.getContents(bookId)
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
  }
}
