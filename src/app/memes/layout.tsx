import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Random Memes",
    description: "Random Memes Generator"
}

export default function MemeLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <Navbar title="Random Meme Generator"/>
        <main className="max-w-5xl m-auto flex flex-col h-[90vh] justify-center  items-center">
            {children}
        </main>
        <Footer />
    </div>
}