

export default function Button({label, href}){
    return(
        <button className="bg-text text-white py-2 px-4 font-mono uppercase text-xs cursor-pointer">
            <a href={href}>{label}</a>
        </button>
    )
}



