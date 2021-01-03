import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { books } from "../books";

@Component({
  selector: "app-book-contents",
  templateUrl: "./book-contents.component.html",
  styleUrls: ["./book-contents.component.css"]
})
export class BookContentsComponent implements OnInit {
  book;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the book id from the current route.
    const bookIdFromRoute = this.route.snapshot.paramMap.get("bookId");
    // Find the product that correspond with the id provided in route.
    this.book = books.find(book => {
      return book.id === Number(bookIdFromRoute);
    });
  }
}
