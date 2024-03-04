import NavBar from "./NavBar";
import WhatIDo from "./WhatIDo";
import Skills from "./Skills";
import WordsonMarble from "./WordsOnMarble";

const AboutMe = () => {
    return (
        <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-[4rem] overflow-hidden">
            <NavBar />

                    <section className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">About Me</h1>
                            <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                        </div>
                        <p className="text-[14px] md:text-[16px] text-justify text-litewhite" data-aos="fade-down">I am a Software Engineer - Full Stack, a programming enthusiast with 2 years working experience in Backend and Frontend development and an open source contributor eager to contribute to team success through hard work, reliability, innovative ideas, and excellent organizational skills.I'm a skilled software engineer with a strong focus on JavaScript, Node.js, React.js, and Next.js. I have a proven track record of developing robust and scalable web applications, leveraging these technologies to deliver exceptional user experiences. I can provide reuseable clean codes and pixel perfect web designs. I also make the website responsive and more interactive with web animations. A responsive design makes my website accessible to all users, regardless of their device. I'm a seasoned data analyst with a knack for turning complex data into actionable insights. With proficiency in Excel, Python, SQL, and Tableau, I've led projects that resulted in significant cost savings and improved data accuracy. I thrive in collaborative environments and am eager to contribute to your team's success. Looking forward to discussing how my skills can benefit your organization.</p>
                    </section>

                    <WhatIDo />

                    <Skills />

                    <WordsonMarble />
        </main>
    );
}

export default AboutMe;