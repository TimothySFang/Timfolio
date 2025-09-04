import Marquee from "./Marquee";

const MarqueeDemo = () => {
    return (
        <div className="space-y-8">
            {/* Single String Examples */}
            <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#4A4139] mb-2">
                    Single String Examples
                </h3>
                <div className="space-y-4">
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Default spacing:</p>
                        <Marquee text="PROJECTS" />
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Custom speed:</p>
                        <Marquee text="SOFTWARE DEV" speed={30} />
                    </div>
                </div>
            </div>

            {/* Multiple Strings Examples */}
            <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#4A4139] mb-2">
                    Multiple Strings Examples
                </h3>
                <div className="space-y-4">
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Default spacing (8rem):</p>
                        <Marquee text={["PROJECTS", "EXPERIENCE", "SKILLS", "TECHNOLOGY"]} />
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Tight spacing (4rem):</p>
                        <Marquee text={["REACT", "JAVASCRIPT", "PYTHON", "JAVA"]} spacing={4} />
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Wide spacing (12rem):</p>
                        <Marquee text={["INNOVATION", "CREATIVITY", "SOLUTION"]} spacing={12} />
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Mixed content with custom speed:</p>
                        <Marquee 
                            text={["FRONTEND", "BACKEND", "FULLSTACK", "DEVELOPMENT"]} 
                            spacing={6}
                            speed={25}
                        />
                    </div>
                </div>
            </div>

            {/* Custom Styling Examples */}
            <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#4A4139] mb-2">
                    Custom Styling with Multiple Strings
                </h3>
                <div className="space-y-4">
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Gradient background:</p>
                        <Marquee 
                            text={["DESIGN", "USER EXPERIENCE", "INTERFACE"]}
                            spacing={8}
                            className="py-6 bg-gradient-to-r from-[#4A4139] via-[#6B5F5A] to-[#4A4139]"
                        />
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Extra padding:</p>
                        <Marquee 
                            text={["CODE", "QUALITY", "PERFORMANCE"]}
                            spacing={10}
                            className="py-8"
                        />
                    </div>
                </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-[#FDF7EC] p-6 rounded-lg">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#4A4139] mb-4">
                    Usage Examples
                </h3>
                <div className="space-y-4 font-mono text-sm">
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Single string:</p>
                        <pre className="bg-white p-3 rounded text-[#4A4139] overflow-x-auto">
{`<Marquee text="PROJECTS" />`}
                        </pre>
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Multiple strings with default spacing:</p>
                        <pre className="bg-white p-3 rounded text-[#4A4139] overflow-x-auto">
{`<Marquee text={["PROJECTS", "EXPERIENCE", "SKILLS"]} />`}
                        </pre>
                    </div>
                    <div>
                        <p className="font-['Space_Grotesk'] text-sm text-[#4A4139] mb-2">Custom spacing and speed:</p>
                        <pre className="bg-white p-3 rounded text-[#4A4139] overflow-x-auto">
{`<Marquee 
  text={["REACT", "JAVASCRIPT", "PYTHON"]} 
  spacing={6}
  speed={30}
/>`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeDemo;
