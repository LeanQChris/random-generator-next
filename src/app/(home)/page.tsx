import Joke from "./components/joke";
import { fetchRandomJokes } from "./data/api"
import { Joke as EJoke } from "./data/entity";

export default async function Home() {
  const joke: EJoke = await fetchRandomJokes();
  return (
    <div className="space-y-5">
      <Joke joke={joke} />
    </div>
  )
}
