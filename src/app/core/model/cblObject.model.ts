import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";

export class CblObject {

	constructor(
		public id: number,
		public cblType: string,
		public language: string,
	) { }
}

@Injectable({
	providedIn: "root",
})
export class CblObjectAdapter implements Adapter<CblObject> {
	adapt(item: any): CblObject {
		return new CblObject(item.id, item.CblType, item.language);
	}

}