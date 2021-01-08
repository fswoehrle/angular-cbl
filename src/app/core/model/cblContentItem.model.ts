import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";

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

@Injectable({
	providedIn: "root",
})
export class CblObjectAdapter implements Adapter<CblContentItem> {
	adapt(item: any): CblContentItem {
		return new CblContentItem(item.style, item.chapterNumber, item.chapterTitle, item.refId, item.lessonNumber, item.lessonTitle);
	}

}

