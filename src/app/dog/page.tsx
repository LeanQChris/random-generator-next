import { fetchRandomDog } from "./data/api";
import Dog from "./data/entity";
import DogCard from "./components/meme";

export default async function MemePage() {
  const dog: Dog = await fetchRandomDog()
  return <>
    <DogCard dog={dog} />
  </>
}