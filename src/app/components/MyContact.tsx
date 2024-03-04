import NavBar from "./NavBar";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
const MyContact = () => {
    return ( 
        <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-[4rem] overflow-hidden">
            <NavBar />

                <section className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">Contact Details</h1>
                        <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                    </div>
                </section>

            <Socials />

            <ContactForm />
        </main>
     );
}
 
export default MyContact;