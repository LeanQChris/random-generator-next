"use client"
import { fetchRandomJokes } from "../data/api";
import { Joke as EJoke } from "../data/entity";
import ReloadJokesButton from "./reload";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";

const Joke = ({ joke }: { joke: EJoke }) => {

    const { data, isLoading, isFetching,refetch } = useQuery({ queryKey: ["jokes"], queryFn: fetchRandomJokes, initialData: joke, enabled: false })

    if(isFetching || isLoading){
        return <Loading/>
    }

    return <>
        <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl text-center font-thin">{data.setup}</h2>
            <h3 className="text-3xl text-center uppercase font-bold">{`"${data.punchline}"`}</h3>
        </div>
        <ReloadJokesButton onClick={()=>refetch()} />
    </>

}

export default Joke;