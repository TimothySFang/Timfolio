import { useState, useEffect } from "react";
import PageLayout from "../../components/common/PageLayout";
import ExperienceSection from "../../components/Software/ExperienceSection";
import jobData from "../../assets/Software/JobExperience.json";

const SoftwarePage = () => {
    const [isMobile, setIsMobile] = useState(false);

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
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block">
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4">{'>'}</span>
                                <span className="relative z-10">CAREER</span>
                                <span className="absolute inset-0 bg-[#FDB50B]/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </p>
                        </div>
                        <div className="relative group cursor-pointer">
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block">
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4">{'>'}</span>
                                <span className="relative z-10">PROJECTS</span>
                                <span className="absolute inset-0 bg-[#FDB50B]/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </p>
                        </div>
                        <div className="relative group cursor-pointer">
                            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] relative inline-block">
                                <span className="opacity-0 group-hover:opacity-100 absolute -left-4">{'>'}</span>
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
            <div className="bg-[#FDF7EC] py-10 md:py-20">
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
        </PageLayout>
    )
}

export default SoftwarePage;