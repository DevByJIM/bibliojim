export class Book{
    constructor(
    public _id: string,
    public myb_title: string,
    public myb_author: string,
    public myb_synopsis: string,
    public myb_gender: string,
    public myb_pages: number,
    public myb_cover: string,
    public myb_fecpub: number,
    public myb_feclec: Date,
    public myb_observ: string,
    public myb_value: number,
    public myb_hasmovie: boolean,
    public myb_fechor: Date,
    )
    {};

}