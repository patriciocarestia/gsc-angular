export interface MovieResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Movie[];
}

export interface Movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: string[],
    planets: string[],
    starships: string[],
    vehicles: string[],
    species: string[],
    created: string,
    edited: string,
    url: string
}
