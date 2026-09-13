import { Head } from '@inertiajs/react';

export default function Header(){
    return (
        <>
            <Head title='Sam Costanzo'/>
            <header className="flex justify-center gap-4 bg-green-500/50 p-[.5em] relative z-1">
                <nav className="flex gap-4">
                    <a href="/" className="font-bold text-lg text-amber-300 hover:text-black duration-300">Home</a>
                    <a href="/about" className="font-bold text-lg text-[#333] hover:text-black duration-300">About</a>
                    <a href="/resume" className="font-bold text-lg text-[#333] hover:text-black duration-300">Resume</a>
                    <a href="/contact" className="font-bold text-lg text-[#333] hover:text-black duration-300">Contact</a>
                </nav>
            </header>
        </>
    );
}