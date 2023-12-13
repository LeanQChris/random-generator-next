import { fetchRandomMemes } from "./data/api";
import Meme from "./data/entity";
import MemeCard from "./components/meme";

export default async function MemePage() {
  const meme: Meme = await fetchRandomMemes()
  return <>
    <MemeCard meme={meme} />
  </>
}