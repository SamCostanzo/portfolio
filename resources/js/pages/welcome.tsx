import Layout from '@/components/layout';
import Header from '@/components/Header';

export default function Welcome() {
    return (
        <Layout>
            <div className="homepage-intro relative z-0 flex flex-col gap-4 justify-center align-center items-center min-h-[90vh]  bg-two/75 bg-blend-overlay mt-[-44px]">

            {/* Tree */}
            <div style={{ backgroundImage: `url(tree-1.jpeg)` }}  className='subtle-bg-image absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-cover bg-right bg-no-repeat opacity-7'></div>

            {/* Octopus */}
            <div style={{ backgroundImage: `url(octopus.png)` }}  className='subtle-bg-image absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-contain bg-right bg-no-repeat opacity-50 -scale-x-100'></div>

                <div className='relative z-1 flex flex-col gap-4 justify-center items-center max-w-fit p-4'>
                    <h2 className='text-4xl font-bold text-black'>Hi, I'm Sam</h2>
                    <p>I'm a Full Stack Web Developer based in Upstate New York. I specialize in Laravel, React, and WordPress.</p>
                    <p>If you need a website or application, I would love to hear from you!</p>
                </div>
            </div>
        </Layout>
    );
}
