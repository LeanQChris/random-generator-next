import { Joke } from "./entity";

export const fetchRandomJokes = async ():Promise<Joke> => {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random",{cache:"reload"});
    return response.json();
};