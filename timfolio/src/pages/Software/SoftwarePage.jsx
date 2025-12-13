import { useState, useEffect, useRef } from "react";
import PageLayout from "../../components/common/PageLayout";
import ExperienceSection from "../../components/Software/ExperienceSection";
import ResumeModal from "../../components/Software/ResumeModal";
import Marquee from "../../components/common/Marquee";
import jobData from "../../assets/Software/JobExperience.json";
import Picturesque from "../../assets/Software/picturesque.png";
import FollowCare from "../../assets/Software/followCare.png";
import StepnOut from "../../assets/Software/stepnout.png";

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
                
                <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:px-16">
                    <div className="md:col-span-6 order-1 mb-8 md:mb-0">
                        <div className="relative flex justify-center">
                            <div className="absolute top-[-30px] left-4 md:top-[-50px] md:right-[50px] bg-[#4A4139] aspect-[4/3] w-[85%]" />
                            <img
                                src={StepnOut}
                                alt="About me visual"
                                className="aspect-[4/3] w-[85%] object-cover mx-auto md:ml-auto relative"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 order-2 h-full flex items-center justify-center px-4 md:px-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <div className="relative">
                                    <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                                        <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible">
                                            STEPN OUT
                                        </h2>
                                    </span>
                                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic relative -mt-4">
                                        STEPN OUT
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-5 max-w-xl">
                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    StepnOut is a community-driven wellness app that encourages people to get outside and stay active through simple weekly challenges and social accountability. Instead of competition or streak pressure, the app focuses on consistency, encouragement, and real-world movement.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    Users complete approachable challenges, share quick check-ins or photos, and see friends and community members doing the same—making movement feel shared and sustainable.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    On the tech side, StepnOut is a mobile-first app built with a modern React-based frontend and a lightweight backend that supports user authentication, weekly challenges, social posts, and media uploads. The system is designed to be simple, scalable, and easy to iterate on.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    StepnOut is live on the{' '}
                                    <a
                                        href="https://apps.apple.com/ca/app/stepn-out/id6739888631"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-[#FDB50B] transition-colors"
                                        aria-label="Download StepnOut on the App Store"
                                    >
                                        App Store
                                    </a>
                                    {' '}and{' '}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.patrickgousseau.stepnout&hl=en_CA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-[#FDB50B] transition-colors"
                                        aria-label="Download StepnOut on Google Play"
                                    >
                                        Google Play
                                    </a>
                                    , and currently has 50+ users.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:px-16">
                    <div className="md:col-span-6 order-2 mb-8 md:mb-0">
                        <div className="relative flex justify-center">
                            <div className="absolute top-[-30px] left-4 md:top-[-50px] md:right-[50px] bg-[#4A4139] aspect-[4/3] w-[85%]" />
                            <img
                                src={FollowCare}
                                alt="About me visual"
                                className="aspect-[4/3] w-[85%] object-cover mx-auto md:ml-auto relative"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 order-1 h-full flex items-center justify-center px-4 md:px-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <div className="relative">
                                    <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                                        <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible">
                                            FOLLOWCARE
                                        </h2>
                                    </span>
                                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic relative -mt-4">
                                        FOLLOWCARE
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-5 max-w-xl">
                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    FollowCare is a proof-of-concept automated post-appointment follow-up system for dental clinics, built to demonstrate how multi-agent AI pipelines can automate patient care workflows using real clinic data. The system is designed to run on an existing dental clinic database and trigger follow-ups automatically after procedures.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    Using a multi-agent architecture, FollowCare performs patient check-ins, conducts basic risk assessments based on reported symptoms, and determines appropriate next steps including reassurance, care instructions, and automatic escalation to clinic staff. The goal is to reduce manual follow-up work while improving early detection of post-procedure issues.
                                </p>

                                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                                    On the technical side, FollowCare is a backend-driven, agentic pipeline built to showcase real-world automation. Multiple agents handle data ingestion, follow-up generation, patient response interpretation, and risk evaluation. The system integrates with clinic databases, uses structured logic alongside LLM reasoning, and is designed with healthcare data sensitivity and extensibility in mind.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:px-16">
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
                    <div className="md:col-span-6 order-2 h-full flex items-center justify-center px-4 md:px-8">
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
        </PageLayout>
    )
}

export default SoftwarePage;