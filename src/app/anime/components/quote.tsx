"use client"
import { AnimeQuote } from "../data/entity";
import ReloadButton from "@/components/buttons/reload";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/app/jokes/components/loader";
import { fetchRandomAnimeQuote } from "../data/api";

export default function Quote({ animeQuote }: { animeQuote: AnimeQuote }) {

  const { data, isLoading, isFetching, refetch } = useQuery({ queryKey: ["memes"], queryFn: fetchRandomAnimeQuote, initialData: animeQuote, enabled: false })

  if (isLoading || isFetching) {
    return <Loader />
  }
  return <>
    <div className="space-y-6 flex h-[90vh] flex-col justify-center items-center">
      <h3 className="text-3xl text-center uppercase font-bold">
        {data.anime}
      </h3>
      <h2 className="text-4xl text-center font-thin">
        {`"${data.character}" : ${data.quote}`}
      </h2>
    </div>
    <ReloadButton onClick={() => refetch()} />
  </>
}