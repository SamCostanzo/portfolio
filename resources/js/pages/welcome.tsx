import { Head } from '@inertiajs/react';
import Layout from '@/components/layout';
import GridCard from '@/components/grid-card';

export default function Welcome() {
    return (
        <Layout>
            
            <Head title="Sam Costanzo" />

            <div className='flex flex-col md:flex-row gap-4 p-4 max-w-6xl'>   

                <aside className='rounded-2xl bg-amber-200 border border-indigo-500 p-8'>
                    <img src="Lucy-Holland.jpg" alt="Sam" className='max-w-2xs' />
                    <h3>Contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ut!</p>
                </aside>

                <div className='panel flex flex-col gap-4 py-4 md:max-w-[75%] rounded-2xl bg-amber-200 border border-indigo-500 p-8'>
                    <h2 className='mb-2 font-bold text-3xl'>Hello!</h2>
                    <div className='bg-three h-1.5 w-[5em]'></div>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti error excepturi nulla cum, tempore adipisci velit reiciendis ducimus a, aperiam placeat, magnam non ea? Eos dolore molest aliquam enim vel placeat quos. At ut consectetur possimus odit facere voluptatem quisquam praesentium a!</p>

                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic, veritatis ut quia quos pariatur.</p>

                    <div className='what-i-do py-8'>
                        <h2 className='mb-4 font-bold text-3xl'>What I do</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <GridCard title='Cracker' description='Bla bla bla Hika. Onsectetur. Perspindi blanditiis adi' />
                            <GridCard title='Cooking' description='I like to cook. Onsectetur. Perspindi blanditiis adi'/>
                            <GridCard title='Blacksmithing' description='voluptatum velit magni facere, adipisci distinctio atem consectetur. Perspindi blanditiis adipisci sapiente, fuga' />
                            <GridCard title='Enchanting' description='voluptatum velit magni facere, adipisci distinctio consequuntur perferendis licabo, odit aliquid alias. Aut at qu'/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
