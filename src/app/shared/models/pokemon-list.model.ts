export interface PokemonItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string;
    previous?: any;
    results: PokemonItem[];
}