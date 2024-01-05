import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Random Anime Quotes",
    description: "Random Anime Quotes"
}

export default function AnimeQuoteLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <Navbar title="Random Anime Quotes"/>
        <main className="max-w-5xl m-auto flex flex-col h-[90vh] justify-center  items-center">
            {children}
        </main>
        <Footer />
    </div>
}