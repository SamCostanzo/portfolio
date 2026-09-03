import { Head } from '@inertiajs/react';
import Layout from '@/components/layout';

export default function Welcome() {
    return (
        <Layout>
            
            <Head title="Sam Costanzo" />

            <div className='flex gap-4 max-w-6xl'>   

                <aside className='rounded-3xl bg-amber-200 border border-indigo-500 p-8'>
                    <img src="" alt="Sam" />
                    <h3>Contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ut!</p>
                </aside>

                <div className='panel max-w-[75%] rounded-3xl bg-amber-200 border border-indigo-500 p-8'>
                    <h2 className='mb-4'>About Me</h2>
                    <div className='bg-amber-400 h-1.5 w-2.5'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti error excepturi nulla cum, tempore adipisci velit reiciendis ducimus a, aperiam placeat, magnam non ea? Eos dolore molestias voluptatum velit magni facere, adipisci distinctio consequuntur perferendis placeat? Repellendus provident, iste consequatur tempore assumenda repudiandae perferendis aut id voluptatem consectetur. Perspiciatis hic cumque unde, eligendi blanditiis adipisci sapiente, fuga dolore modi dolorem explicabo, odit aliquid alias. Aut at quo autem animi temporibus corrupti, odit, error distinctio est pariatur non cumque sed ea. Laudantium corrupti sed natus aliquam enim vel placeat quos. At ut consectetur possimus odit facere voluptatem quisquam praesentium a!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic, veritatis ut quia quos pariatur.</p>
                </div>
            </div>
        </Layout>

    );
}
