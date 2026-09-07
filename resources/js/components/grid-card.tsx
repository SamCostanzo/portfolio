

interface GridCardProps {
    title: string;
    description: string;
}

export default function GridCard({title, description}: GridCardProps){
    return (
        <div className='grid-item flex flex-col gap-4 rounded-2xl bg-one p-8'>
            <h3 className="font-bold text-lg">{title}</h3>
            <p>{description}</p>
        </div>
    );
}