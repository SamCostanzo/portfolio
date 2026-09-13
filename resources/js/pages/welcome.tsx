import { Head } from '@inertiajs/react';
import Layout from '@/components/layout';
import GridCard from '@/components/grid-card';

export default function Welcome() {
    return (
        <Layout>
            
            <Head title="Sam Costanzo" />

            <div className='flex flex-col md:flex-row gap-4 max-w-6xl'>   

                <aside className='flex flex-col gap-4 items-center max-w-[300px] rounded-2xl bg-white border border-[#ddd] p-4'>
                    <img src="Lucy-Holland.jpg" alt="Sam" className='rounded-2xl' />
                    <span className='max-w-fit bg-black rounded py-2 px-4'><h3 className='text-center text-white text-xs uppercase font-bold'>Web Developer</h3></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ut!</p>
                </aside>

                <div className='panel flex flex-col gap-4 py-4 rounded-2xl bg-white border border-[#ddd] p-8'>

                    <h2 className='font-bold text-3xl'>Hello!</h2>
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
