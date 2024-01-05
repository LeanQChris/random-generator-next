"use client"
import Image from "next/image";
import Meme from "../data/entity";
import ReloadButton from "@/components/buttons/reload";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomMemes } from "../data/api";
import { Loader } from "@/app/jokes/components/loader";

export default function MemeCard({ meme }: { meme: Meme }) {

    const { data, isLoading, isFetching, refetch } = useQuery({ queryKey: ["memes"], queryFn: fetchRandomMemes, initialData: meme, })

    if (isLoading || isFetching) {
        return <Loader />
    }

    return <>
        <div className="space-y-6 flex flex-col justify-center items-center">
            <h2 className="pt-5 lg:pt-0 lg:text-4xl text-center font-extrabold">{data.title}</h2>
            <Image className="h-[500px] px-5 lg:px-0 object-contain" src={data.url!} width={500} height={500} alt={data.title!} />
            <p className="text-end font-thin">By - {data.author!}</p>
        </div>
        <ReloadButton onClick={() => refetch()} />
    </>
}