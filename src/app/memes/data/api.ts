import Meme  from "./entity";

export const fetchRandomMemes = async ():Promise<Meme> => {
    const response = await fetch("https://meme-api.com/gimme",{cache:"reload"});
    return response.json();
};