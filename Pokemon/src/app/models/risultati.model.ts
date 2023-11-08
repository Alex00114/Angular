import { Pokemon } from "./pokemon.model";

export class Risultati {
    count!: number;
    next!: string;
    previous!: string;
    results!: Pokemon[];
}