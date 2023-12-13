export default function Navbar({title="Random Joke Generator"}:{title?:string}) {
    return <nav className="text-center py-4">
        <h2 className="text-3xl">{title}</h2>
    </nav>
}