export class Experiencia {
    id?: number;
    title: string;
    time: string;
    description: string;


    constructor(title: string, time: string, description: string) {
        this.title = title;
        this.time = time;
        this.description = description;
    }
}
