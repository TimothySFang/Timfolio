import RBC from "../../assets/logos/RBC.png"
import Selkirk from "../../assets/logos/Selkirk.png"
import EnsembleLogo from "../../assets/logos/EnsembleLogo";

const logoMap = {
    RBC: { type: 'image', src: RBC },
    Ensemble: { type: 'component', Component: EnsembleLogo },
    Selkirk: { type: 'image', src: Selkirk }
}

const ExperienceSection = ({ title, image, skills, location, company, description, isReversed, Logo }) => {
    const LogoComponent = Logo && logoMap[Logo]?.type === 'component' ? logoMap[Logo].Component : null;

    return (
        <div className="grid grid-cols-12 gap-8 px-20 py-6">
            <div className={`col-span-5 ${isReversed ? 'order-last' : ''} flex items-center`}>
                <div className="w-full flex items-center justify-center">
                    <div className="w-[350px] h-[400px] flex items-center justify-center">
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
            <div className={`col-span-7 ${isReversed ? 'order-first' : ''} flex items-center`}>
                <div className="max-w-[700px]">
                    <h2 className="font-['Cormorant_Infant'] text-4xl font-medium text-[#4A4139] mb-2">
                        {company}
                    </h2>

                    <div className="bg-[#FDB50B]/60 inline-block px-2 py-1 mb-2">
                        <p className="font-['Space_Grotesk'] text-xs tracking-widest">
                            {skills}
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="font-['Space_Grotesk'] font-extralight text-sm tracking-widest text-[#4A4139]">
                            {location}
                        </p>
                        <p className="font-['Space_Grotesk'] font-extralight text-sm tracking-widest text-[#4A4139]">
                            {title}
                        </p>
                    </div>

                    <div className="font-['Space_Grotesk'] font-extralight text-sm leading-relaxed text-[#4A4139]">
                        {description.summary}
                        <ul className="list-disc pl-4 mt-4 space-y-2">
                            {description.bulletPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;