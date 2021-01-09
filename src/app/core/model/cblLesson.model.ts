import { CblObject } from "./cblObject.model";

export class CblParagraph {
    constructor(
        public title: string,
        public style: string,
        public content: string) { }
}

export class CblLesson extends CblObject {
    constructor(
        public id: number,
        public cblType: string,
        public language: string,
        public book: string,
        public year: number,
        public lessonNumber: string,
        public lessonTitle: string,
        public paragraphs: CblParagraph[]
    ) {
        super(id, cblType, language);
    }
}