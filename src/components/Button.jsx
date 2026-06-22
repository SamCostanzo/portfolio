export default function Button({label, href, target}){
    return(
        <button className="bg-text text-white py-2 px-4 font-mono uppercase text-xs cursor-pointer hover:bg-transparent hover:outline hover:outline-text hover:text-text duration-300">
            <a href={href} target={target}>{label}</a>
        </button>
    )
}



