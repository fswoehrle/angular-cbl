import { Component, OnInit } from '@angular/core';
import { LessonService } from "../lesson.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<Object>;

  constructor(
    private lessonService: LessonService
  ) {}
  
  ngOnInit(): void {
    this.books = this.lessonService.getBooks(); 
  }
}