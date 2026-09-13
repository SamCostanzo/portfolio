

export default function Header(){
    return (
        <header className="flex justify-between gap-4 bg-two p-[1em]">
            <h1 className="font-bold text-xl text-black">Sam Costanzo</h1>
            <nav className="flex gap-4">
                <a href="/" className="font-bold text-lg text-amber-300 hover:text-black duration-300">Home</a>
                <a href="/about" className="font-bold text-lg text-amber-300 hover:text-black duration-300">About</a>
                <a href="/resume" className="font-bold text-lg text-amber-300 hover:text-black duration-300">Resume</a>
                <a href="/contact" className="font-bold text-lg text-amber-300 hover:text-black duration-300">Contact</a>
            </nav>

        </header>
    );
}