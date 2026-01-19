export type Position = "Défenseur" | "Milieu" | "Attaquant";

export type Stats = {
    goals: number;
    assists: number;
    matches: number;
}

export type Player = {
    id: number;
    name: string;
    number: number;
    position: Position;    
}

export type PlayerCardProps = {
    name: string;
    number: number;
}

export type Players = Array<Player>;

export type PSGData = {
    team: string;
    season: string;
    players: Players;
    //players: Player[];   version javascript

}
