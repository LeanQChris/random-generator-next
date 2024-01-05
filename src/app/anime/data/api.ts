import { AnimeQuote } from "./entity";

export const fetchRandomAnimeQuote = async (): Promise<AnimeQuote> => {
    const response = await fetch("https://animechan.xyz/api/random", { cache: "reload" });
    return response.json();
};