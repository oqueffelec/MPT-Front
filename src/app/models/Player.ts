import { Competitor } from "./Competitor";

export class Player {
    public rank: string;
    public movement: number;
    public competitor: Competitor;

    constructor(playerObject: any) {
        this.rank = playerObject.rank;
        this.movement = playerObject.movement;
        this.competitor = playerObject.competitor;
    }


}