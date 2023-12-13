"use client"
import Image from "next/image";
import Meme from "../data/entity";
import ReloadButton from "@/components/buttons/reload";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomMemes } from "../data/api";
import { Loader } from "@/app/(home)/components/loader";

export default function MemeCard({ meme }: { meme: Meme }) {

    const { data, isLoading, isFetching, refetch } = useQuery({ queryKey: ["memes"], queryFn: fetchRandomMemes, initialData: meme, enabled: false })

    if (isLoading || isFetching) {
        return <Loader />
    }

    return <>
        <div className="space-y-6 flex flex-col justify-center items-center">
            <h2 className="text-4xl text-center font-extrabold">{data.title}</h2>
            <Image className="h-[500px] object-contain" src={data.url!} width={500} height={500} alt={data.title!} />
            <p className="text-end font-thin">By - {data.author!}</p>
        </div>
        <ReloadButton onClick={() => refetch()} />
    </>
}