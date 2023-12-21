import Dog from "./entity";

export const fetchRandomDog = async (): Promise<Dog> => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", { cache: "reload" });
    return response.json();
};