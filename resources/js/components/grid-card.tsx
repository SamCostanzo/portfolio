

interface GridCardProps {
    title: string;
    description: string;
}

export default function GridCard({title, description}: GridCardProps){
    return (
        <div className='grid-item flex flex-col gap-2 rounded-2xl bg-one p-8'>
            <h3 className="font-bold text-xl">{title}</h3>
            <p>{description}</p>
        </div>
    );
}