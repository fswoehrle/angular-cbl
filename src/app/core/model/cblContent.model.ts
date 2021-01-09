//import { Injectable } from "@angular/core";
//import { Adapter } from "../adapter";

import { CblObject } from "./cblObject.model";

export class CblContent extends CblObject{
constructor(
		public id: number,
		public cblType: string,
		public language: string,
		public book: string,
		public bookId: string,
		public year: string,
		public items: CblContentItem[]
	) {
		super(id, cblType, language);
	}
}

export class CblContentItem {
	constructor(
		public style: string,
		public chapterNumber: string,
		public chapterTitle: string,
		public refId: string,
		public lessonNumber: string,
		public lessonTitle: string,
	) { }

}
/*
@Injectable({
	providedIn: "root",
})
export class CblContentAdapter implements Adapter<CblContent> {
	adapt(item: any): CblContent {
		console.log("CblContentAdapter: "+item.bookId)
		return new CblContent(item.id, item.CblType, item.language, item.book, item.bookId, item.year, item.items);
	}

}
*/