import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaFigma, FaGithub, FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript  } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiUnocss, SiFirebase, SiPostman, SiPython, SiNpm, SiYarn, SiCanva } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
    return ( 
        <main className="grid gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">Stack and Tools</h1>
                <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaReact className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">React</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <TbBrandNextjs className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">NextJS</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiTypescript className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Typescript</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiTailwindcss className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">TailwindCSS</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiUnocss className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">UnoCSS</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaSass className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">SASS</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiFirebase className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Firebase</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiPostman className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Postman</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiNpm className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Npm</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiYarn className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Yarn</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaHtml5 className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">HTML</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-4 md:px-2" data-aos="fade-down">
                    <FaCss3Alt className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">CSS</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <IoLogoJavascript className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">JavaScript</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaBootstrap className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Bootstrap</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiPython className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Python</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaGithub className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">GitHub</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaGitAlt className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Git</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <TbBrandVscode className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">VS-Code</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <FaFigma className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Figma</h1>
               </div>

               <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2" data-aos="fade-down">
                    <SiCanva className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Canva</h1>
               </div>
            </div>
        </main>
     );
}
 
export default Skills;