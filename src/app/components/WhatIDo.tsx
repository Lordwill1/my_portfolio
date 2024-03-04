import { AiFillSetting } from "react-icons/ai";
import { FaCode, FaWandMagicSparkles, FaChartLine } from "react-icons/fa6";

const WhatIDo = () => {
    return (
        <main className="grid gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">What I Do!?</h1>
                <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <AiFillSetting className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Software Engineering</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">I specialize in crafting dynamic, cutting-edge Single-Page Applications (SPAs) using the latest technologies. With a strong focus on React, NextJS, and Typescript, I create engaging web experiences that are not only visually stunning but also highly functional, responsive and interactive with optimal performance.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <FaCode className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Web Development</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">I can provide clean codes and pixel perfect web designs. I also make the website more and more interactive and responsive. Every website I develop is built with two primary goals: Firstly, I program it to work across all devices. Secondly, I design it to be fast and interactive as possible.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <FaWandMagicSparkles className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Data Analysis</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">I'm a seasoned data analyst with a knack for turning complex data into actionable insights. With proficiency in Excel, Python, SQL, and Tableau, I've led projects that resulted in significant cost savings and improved data accuracy. I thrive in collaborative environments and am eager to contribute to your team's success. Looking forward to discussing how my skills can benefit your organization.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <FaChartLine className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Search Engine Optimization</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">SEO is a strategic and dynamic process that involves a comprehensive approach to enhancing a website&apos;s online presence. When I optimize a website for search engines, I engage in a thorough analysis of its structure, content, and performance. This involves refining the website&apos;s code, improving its loading speed, and ensuring it is mobile-friendly.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WhatIDo;