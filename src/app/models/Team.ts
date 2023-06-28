import { Player } from "./Player";

export class Team {
    public name: string;
    public creationDate: Date;
    public playerTop10: String;
    public playerTop20: String;
    public playerTop30: String;
    public playerTop40: String;
    public playerTop50: String;
    public playerTop60: String;
    public playerTop70: String;
    public playerTop80: String;
    public playerTop90: String;
    public playerTop100: String;
    public playerTop10Category: number;
    public playerTop20Category: number;
    public playerTop30Category: number;
    public playerTop40Category: number;
    public playerTop50Category: number;
    public playerTop60Category: number;
    public playerTop70Category: number;
    public playerTop80Category: number;
    public playerTop90Category: number;
    public playerTop100Category: number;

    public score: number;

    constructor(team?: Team) {
        if(team){
            Object.assign(this, team);
        } else {
            this.name = null;
            this.creationDate = null;
            this.score = null;
            this.playerTop10 = null;
            this.playerTop20 = null;
            this.playerTop30 = null;
            this.playerTop40 = null;
            this.playerTop50 = null;
            this.playerTop60 = null;
            this.playerTop70 = null;
            this.playerTop80 = null;
            this.playerTop90 = null;
            this.playerTop100 = null;
            this.playerTop10Category = null;
            this.playerTop20Category = null;
            this.playerTop30Category = null;
            this.playerTop40Category = null;
            this.playerTop50Category = null;
            this.playerTop60Category = null;
            this.playerTop70Category = null;
            this.playerTop80Category = null;
            this.playerTop90Category = null;
            this.playerTop100Category = null;

        }
    }
}