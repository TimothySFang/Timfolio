import PageLayout from "../../components/common/PageLayout";
const SoftwarePage = () => {
    return (
        <PageLayout>
            <div className="snap-y snap-mandatory">
                <div className="h-screen bg-[#FDF7EC] flex flex-col justify-center items-center">
                    <h1 className="font-['Space_Grotesk'] text-[100px] font-bold tracking-widest text-[#4A4139] mb-2">
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
            </div>
        </PageLayout>
    )
}

export default SoftwarePage;