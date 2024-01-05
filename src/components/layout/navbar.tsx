import Link from "next/link";

export default function Navbar({ title = "Random Joke Generator" }: { title?: string }) {
    return <nav className="text-center py-4 flex justify-between">
        <div className="pl-5">
           <Link href="/">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-95 transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            </Link>
        </div>
        <h2 className="lg:text-3xl">{title}</h2>
        <div />
    </nav>
}