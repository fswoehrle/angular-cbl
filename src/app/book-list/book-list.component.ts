import { Component, OnInit } from '@angular/core';
import { CblBookService } from "../book.service";
import { CblBook } from '../core/model/cblBook.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: CblBook[] = [];
  loading: Boolean = false;
  errorMessage: String = '';

  constructor(
    private bookService: CblBookService
  ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks()
      .subscribe(
        (response) => {
          this.books = response;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      )
  }

  clickContents() {
    window.alert('The product has been shared!');
  }
}