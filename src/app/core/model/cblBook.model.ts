//import { Injectable } from "@angular/core";
//import { Adapter } from "../adapter";

import { CblObject } from "./cblObject.model";

export class CblBook extends CblObject {
	constructor(
		public id: number,
		public cblType: string,
		public language: string,
		public name: string,
		public description: string,
		public image: string,
		public contents_id: number
	) {
		super(id, cblType, language);
	}
}
/*
@Injectable({
	providedIn: "root",
})
export class CblBookAdapter implements Adapter<CblBook> {
	adapt(item: any): CblBook {
		return new CblBook(item.id, item.CblType, item.language, item.name, item.description, item.image, item.contents_id);
	}

}
*/