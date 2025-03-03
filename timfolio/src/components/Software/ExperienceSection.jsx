import RBC from "../../assets/logos/RBC.png"
import Selkirk from "../../assets/logos/Selkirk.png"
import EnsembleLogo from "../../assets/logos/EnsembleLogo";

const logoMap = {
    RBC: { type: 'image', src: RBC },
    Ensemble: { type: 'component', Component: EnsembleLogo },
    Selkirk: { type: 'image', src: Selkirk }
}

const ExperienceSection = ({ title, image, skills, location, company, description, isReversed, Logo, isMobile }) => {
    const LogoComponent = Logo && logoMap[Logo]?.type === 'component' ? logoMap[Logo].Component : null;
    
    // Handle description rendering safely
    const renderDescription = () => {
        if (!description) return null;
        
        // If description is a string
        if (typeof description === 'string') {
            return <p className="font-['Roboto'] text-sm md:text-base font-light text-[#4A4139] mb-2">{description}</p>;
        }
        
        // If description is an array
        if (Array.isArray(description)) {
            return description.map((desc, index) => (
                <p key={index} className="font-['Roboto'] text-sm md:text-base font-light text-[#4A4139] mb-2">
                    {desc}
                </p>
            ));
        }
        
        // If description is an object with summary and bulletPoints
        if (description.summary && description.bulletPoints) {
            return (
                <>
                    <p className="font-['Roboto'] text-sm md:text-base font-light text-[#4A4139] mb-4">
                        {description.summary}
                    </p>
                    <ul className="list-disc pl-5 mb-2">
                        {description.bulletPoints.map((bullet, index) => (
                            <li key={index} className="font-['Roboto'] text-sm md:text-base font-light text-[#4A4139] mb-2">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
        
        // If it's some other type of object
        return <p className="font-['Roboto'] text-sm md:text-base font-light text-[#4A4139] mb-2">{JSON.stringify(description)}</p>;
    };

    return (
        <div className={`${isMobile ? 'flex flex-col px-4' : 'grid grid-cols-12 gap-8 px-20'} py-6`}>
            <div className={`${isMobile ? 'w-full mb-6' : `col-span-5 ${isReversed ? 'order-last' : ''}`} flex items-center`}>
                <div className="w-full flex items-center justify-center">
                    <div className={`${isMobile ? 'w-[200px] h-[200px]' : 'w-[350px] h-[400px]'} flex items-center justify-center`}>
                        {Logo && logoMap[Logo] && (
                            logoMap[Logo].type === 'image' ? (
                                <img
                                    src={logoMap[Logo].src}
                                    alt={`${company} logo`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            ) : LogoComponent && (
                                <LogoComponent />
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className={isMobile ? 'w-full' : 'col-span-7'}>
                <div className="flex flex-col gap-2">
                    <h2 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold tracking-widest text-[#4A4139]">
                        {title}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <p className="font-['Space_Grotesk'] text-sm md:text-base tracking-widest text-[#4A4139]">
                            {company}
                        </p>
                        <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] opacity-70">
                            {location}
                        </p>
                    </div>
                    <div className="mt-4">
                        {renderDescription()}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {Array.isArray(skills) ? skills.map((skill) => (
                            <span
                                key={skill}
                                className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139] bg-[#FDB50B]/20 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        )) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;