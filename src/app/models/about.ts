export class About {
    id?: number;
    description1: string;
    description2: string;
    url_CV: string;

    constructor(description: string, description2: string, url_CV: string) {  
        this.description1 = description;
        this.description2 = description2;
        this.url_CV = url_CV;  
    }
}

