export class Proyecto {
    id?: number;
    name: string;
    description: string;
    url_image: string;
    url_sourceCode: string;
    constructor(name: string, description: string, url_image: string, url_sourceCode: string){
        this.name = name;
        this.description = description;
        this.url_image = url_image;
        this.url_sourceCode = url_sourceCode;
    }
}
