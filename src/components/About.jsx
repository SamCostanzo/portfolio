export default function About(){
    return(
        <div className="about bg-background border-b border-black/10">
            <div className="about-inner flex gap-4 max-w-container mx-auto px-4 py-20">
                <div className="">
                    <img src="/images/JL.jpg" alt="" className="max-w-[200px]"/>
                </div>
                <div className="border border-indigo-600">
                    <h2 className="mb-4 font-playfair text-[min(12vw,2rem)] font-bold text-text">Seven Years Building</h2>
                    <em>Still Learning</em>
                    <p>I've spent seven years as the sole developer at a web agency, designing and building hundreds of production websites. I'm self-taught, detail-obsessed, and currently going deep on React, TypeScript, and Node to take my skills to the next level. I have a Master's degree in Music and spent years teaching before switching into tech — which probably explains why I care so much about clear communication and craft.</p>
                </div>
            </div>
        </div>
    )
}