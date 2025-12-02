import { useState, useEffect, useRef } from "react";
import PageLayout from "../../components/common/PageLayout";
import ExperienceSection from "../../components/Software/ExperienceSection";
import ResumeModal from "../../components/Software/ResumeModal";
import Marquee from "../../components/common/Marquee";
import jobData from "../../assets/Software/JobExperience.json";
import Picturesque from "../../assets/Software/picturesque.png"

const SoftwarePage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const experienceSectionRef = useRef(null);
    const projectSectionRef = useRef(null);

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleCareerClick = () => {
        if (experienceSectionRef.current) {
            experienceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleProjectClick = () => {
        if (projectSectionRef.current) {
            console.log('here!')
            projectSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <PageLayout>
            <div className="h-screen bg-[#FDF7EC] flex flex-col justify-center items-center px-4">
                <h1 className="font-['Space_Grotesk'] text-[40px] md:text-[100px] font-bold tracking-widest text-[#4A4139] mb-2 text-center">
                    SOFTWARE DEV
                    <span className="cursor-blink">_</span>
                </h1>
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center">
                        <div className="relative group cursor-pointer">
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block" onClick={handleCareerClick}>
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4">{'>'}</span>
                                <span className="relative z-10">CAREER</span>
                                <span className="absolute inset-0 bg-[#FDB50B]/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </p>
                        </div>
                        <div className="relative group cursor-pointer">
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block" onClick={handleProjectClick}>
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4">{'>'}</span>
                                <span className="relative z-10">PROJECTS</span>
                                <span className="absolute inset-0 bg-[#FDB50B]/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </p>
                        </div>
                        <div className="relative group cursor-pointer" onClick={() => setIsResumeOpen(true)}>
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block">
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-all duration-200 group-hover:-translate-x-1">{'>'}</span>
                                <span className="relative z-10">RESUME</span>
                                <span className="absolute inset-0 bg-[#FDB50B]/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </p>
                        </div>
                    </div>
                    <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139]">
                        STARTED IN 2020
                    </p>
                </div>
            </div>
            <div ref={experienceSectionRef} className="bg-[#FDF7EC] py-10 md:py-20">
                <Marquee className="mb-10 md:mb-20" text="EXPERIENCE" speed={150} />
                {jobData.map((job, index) => (
                    <ExperienceSection
                        key={job.Title}
                        title={job.Title}
                        company={job.Company}
                        location={job.Location}
                        description={job.Description}
                        skills={job.Technology}
                        Logo={job.Logo}
                        isReversed={index % 2 !== 0}
                        isMobile={isMobile}
                    />
                ))}
            </div>
            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />

            <div ref={projectSectionRef} className="bg-[#FDF7EC] py-10 md:py-20">
                <Marquee className="mb-10 md:mb-20" text="PROJECTS" speed={150} />
                <div className="flex flex-col md:grid md:grid-cols-12 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:-px-0">
                    <div className="md:col-span-6 order-1 mb-8 md:mb-0">
                        <div className="relative flex justify-center">
                            <div className="absolute top-[-30px] left-4 md:top-[-50px] md:right-[50px] bg-[#4A4139] aspect-[4/3] w-[85%]" />
                            <img
                                src={Picturesque}
                                alt="About me visual"
                                className="aspect-[4/3] w-[85%] object-cover mx-auto md:ml-auto relative"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 order-2 h-full flex items-start px-4 md:pl-20">
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <div className="relative">
                                    <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                                        <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible">
                                            PICTURESQUE
                                        </h2>
                                    </span>
                                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic relative -mt-4">
                                        PICTURESQUE
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-5 max-w-xl">
                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    Picturesque reimagines reading for people with ADHD and dyslexia by pairing every page of a book with
                                    an AI-generated, context-aware illustration. By reducing cognitive load and enhancing comprehension,
                                    it makes stories more engaging and accessible.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    Built as a full-stack ePub reader, Picturesque uses React, Vite, and Bootstrap on the frontend, with
                                    Python, Flask, DALL-E, and SambaNova powering the backend. Storage is handled with Pinata.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    Im super proud to have created an end-to-end accessible tool, learning new APIs and overcoming challenges
                                    like Pinata’s lack of a Python SDK. Next, I plan to add a library for previously read books and
                                    improve text handling for chapters and sections.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col md:grid md:grid-cols-12 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:-px-0">
            <div className="md:col-span-6 order-1 h-full flex items-start px-4 md:pl-20">
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative">
                            <div className="relative">
                                <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible ">
                                        PICTURESQUE
                                    </h2>
                                </span>
                                <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic relative -mt-4">
                                    PICTURESQUE
                                </h2>
                            </div>
                        </div>

                        <div className="mt-5 max-w-xl">
                            <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                Hi, I'm Timothy! I'm a software engineer passionate about building meaningful, user-focused solutions. My journey as a Chinese-Canadian immigrant has shaped my curiosity and resilience, which I bring into coding, exploring transformative ideas, and personal challenges. I thrive at the intersection of creativity and logic, with experience in full-stack development and a love for learning new technologies.
                            </p>

                            <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base  leading-relaxed">
                                Beyond tech, I'm a triathlete-in-training, aiming to complete an Ironman. I enjoy experimenting with gaming setups, running marathons, and getting lost in Stardew Valley. I believe small steps create big change—whether it's shipping a feature, mastering a skill, or pushing through the last mile. Let's build something impactful together!
                            </p>
                        </div>

                    </div>
                </div>
                <div className="md:col-span-6 order-2 mb-8 md:mb-0">
                    <div className="relative flex justify-center">
                        <div className="absolute top-[-30px] left-4 md:top-[-50px] md:right-[50px] bg-[#4A4139] aspect-[4/3] w-[70%]" />
                        <img
                            src={Picturesque}
                            alt="About me visual"
                            className="aspect-[4/3] w-[70%] object-cover mx-auto md:ml-auto relative"
                        />
                    </div>
                </div>
            </div> */}
        </PageLayout>
    )
}

export default SoftwarePage;