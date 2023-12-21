"use client"
import Image from "next/image";
import Dog from "../data/entity";
import ReloadButton from "@/components/buttons/reload";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomDog } from "../data/api";
import { Loader } from "@/app/(home)/components/loader";

export default function DogCard({ dog }: { dog: Dog }) {

    const { data, isLoading, isFetching, refetch } = useQuery({ queryKey: ["memes"], queryFn: fetchRandomDog, initialData: dog, enabled: false })

    if (isLoading || isFetching) {
        return <Loader />
    }

    return <>
        <div className="space-y-6 flex flex-col justify-center items-center">
            <Image className="h-[500px] object-contain" src={data.message!} width={500} height={500} alt={data.message} />
        </div>
        <ReloadButton onClick={() => refetch()} />
    </>
}