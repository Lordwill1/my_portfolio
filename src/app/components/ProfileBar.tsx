import Image from "next/image";
import { HiOutlineMail, HiOutlineCloudDownload } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile, HiOutlineMapPin } from "react-icons/hi2";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import { useState } from 'react';

const ProfileBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      
    return (
        <aside className="relative lg:fixed w-full lg:w-[24%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet py-3 px-5 flex flex-col gap-4 mt-5 md:mt-0" id="top">
            <div className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-2">
                <div className="w-[25%] lg:w-full flex items-center justify-center">
                    <Image src="/img/Lordwill.jpg" width={200} height={200} alt="Godswill Kalu Image" className="w-full lg:w-[60%] rounded-lg" loading="eager"/>
                </div>

                <div className="flex flex-col items-start lg:items-center gap-2">
                    <h1 className="text-litewhite text-xl md:text-[28px] font-bold text-center">Godswill Kalu (Lordwill)</h1>

                    <h3 className="p-2 rounded-lg bg-smoky-gray text-litewhite text-[14px] md:text-[16px] text-center font-medium">Software Engineer - Full Stack</h3>

                    <a href="/resume/Lordwill Resume.pdf" target="_blank" download="Lordwill Resume.pdf" className="py-[6px] px-3 md:px-5 rounded-md text-smoky-black hover:text-vegas-gold bg-vegas-gold hover:bg-smoky-black hover:border-jet border border-solid text-[12px] md:text-[14px] font-bold transition-all delay-200 flex items-center justify-center">Resume <HiOutlineCloudDownload className="ml-1 animate-bounce"/> </a>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col gap-4`}>
                <div className="flex flex-col gap-2 items-start border-t-[2px] border-b-[2px] border-jet border-solid pt-3 pb-3 overflow-x-hidden">
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMail className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="mailto:egesionucharlesobimnaeto@gmail.com" target="_blank">
                            <p className="text-gray text-[12px] font-bold">Email</p>
                            <h4 className="text-[12px] text-litewhite">messagelordwill@gmail.com</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineDevicePhoneMobile className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="tel:+2348147371491" target="_blank">
                            <p className="text-gray text-[12px] font-bold">Phone</p>
                            <h4 className="text-[12px] text-litewhite">+2348162887537</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMapPin className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <div>
                            <p className="text-gray text-[12px] font-bold">Location</p>
                            <h4 className="text-[12px] text-litewhite">Lagos, Nigeria</h4>
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://github.com/lordwill1" target="_blank"><FaGithub className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href="https://twitter.com/IamLordwill/" target="_blank"><FaXTwitter className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href="https://linkedin.com/in/godswill-kalu-358750221/" target="_blank"><FaLinkedinIn className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href="https://wa.me/2348162887537" target="_blank"><FaWhatsapp className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                    </div>
                </div>
            </div>

            {isMenuOpen ? 
            <MdOutlineKeyboardArrowUp className="absolute top-0 right-0 p-2 sm:p-3 text-4xl md:text-5xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tr-lg rounded-bl-lg shadow-sm shadow-vegas-gold flex lg:hidden cursor-pointer"
            onClick={toggleMenu}
            />
            :
            <MdOutlineKeyboardArrowDown className="absolute top-0 right-0 p-2 sm:p-3 text-4xl md:text-5xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tr-lg rounded-bl-lg shadow-sm shadow-vegas-gold flex lg:hidden cursor-pointer"
            onClick={toggleMenu}
            />
            }

        </aside>
    );
}

export default ProfileBar;