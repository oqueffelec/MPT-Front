export class Competitor {
    public name: string;
    public country: string;
    constructor(competitorObject: any) {
        this.name = competitorObject.name;
        this.country = competitorObject.country;
    }
}