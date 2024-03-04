import NavBar from "./NavBar";
import Image from "next/image";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import ProjectData from "./ProjectsData";
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const MyProjects = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(Array(ProjectData.length).fill(false));

    const toggleMenu = (index: number) => {
        setIsMenuOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-20 overflow-hidden">
            <NavBar />

            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-litewhite" data-aos="fade-down">Recent Projects</h1>
                    <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {ProjectData.map((project, index) => (
                    <div
                        key={project.id}
                        className="relative flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black gap-3 pb-8 lg:pb-4"
                        data-aos="fade-down"
                    >
                        <Image
                            src={project.projectImgURL}
                            width={1000}
                            height={1000}
                            loading="eager"
                            alt="project img"
                            className="w-full"
                        />
                        <div className={`${isMenuOpen[index] ? 'flex' : 'hidden'} relative md:flex flex-col items-center justify-center text-center gap-2 mb-3 md:mb-0`}>
                            <h1 className="text-lg md:text-xl text-litewhite font-bold">{project.projectTitle}</h1>
                            <p className="text-[14px] md:text-[16px] text-litewhite text-center">{project.ProjectAbout}</p>
                            <h4 className="text-[15px] md:text-[17px] text-vegas-gold font-bold font-italic">
                                {project.stack}
                            </h4>

                            <div className="w-full flex items-center justify-center gap-3">
                                <a href={project.projectGithubURL} target="_blank" rel="noopener noreferrer">
                                    <BiLogoGithub className="text-4xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid text-litewhite hover:text-vegas-gold font-medium" />
                                </a>
                                <a href={project.projectLiveURL} target="_blank" rel="noopener noreferrer">
                                    <BiLinkExternal className="text-4xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid text-litewhite hover:text-vegas-gold font-medium" />
                                </a>
                            </div>
                        </div>

                        {isMenuOpen[index] ? (
                            <MdOutlineKeyboardArrowUp
                                className="absolute bottom-0 right-[36%] xs sm:right-[42%] px-2 py-1 w-[100px] text-3xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tl-lg rounded-tr-lg shadow-sm shadow-vegas-gold flex md:hidden cursor-pointer z-10"
                                onClick={() => toggleMenu(index)}
                            />
                        ) : (
                            <MdOutlineKeyboardArrowDown
                                className="absolute bottom-0 right-[36%] xs sm:right-[42%] px-2 py-1 w-[100px] text-3xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tr-lg rounded-tl-lg shadow-sm shadow-vegas-gold flex md:hidden cursor-pointer z-10"
                                onClick={() => toggleMenu(index)}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <h4 className="text-[15px] md:text-[16px] text-litewhite font-bold font-italic text-center">More Projects!?</h4>
                <a href="https://github.com/lordwill1?tab=repositories" target="_blank" className="py-[8px] px-6 rounded-md text-smoky-black hover:text-vegas-gold bg-vegas-gold hover:bg-smoky-black hover:border-jet border border-solid text-[14px] md:text-[16px] font-bold transition-all delay-200 flex items-center justify-center">GitHub <BiLogoGithub className="ml-1 animate-bounce"/> </a>
            </div>
        </main>
    );
}

export default MyProjects;