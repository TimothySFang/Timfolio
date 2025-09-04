import { useEffect, useRef } from "react";

const Marquee = ({ text, speed = 20, className = "", spacing = 8 }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Clone the content for seamless infinite scroll
        const content = marquee.querySelector('.marquee-content');
        const clone = content.cloneNode(true);
        marquee.appendChild(clone);

        // Set animation duration based on content width and speed
        const contentWidth = content.offsetWidth;
        const duration = contentWidth / speed;
        
        marquee.style.setProperty('--scroll-duration', `${duration}s`);
    }, [text, speed]);

    // Handle both single string and array of strings
    const renderText = () => {
        if (Array.isArray(text)) {
            return text.map((item, index) => (
                <span 
                    key={index}
                    className="font-['Space_Grotesk'] text-white uppercase tracking-widest text-lg md:text-xl font-medium"
                    style={{ marginRight: `${spacing}rem` }}
                >
                    {item}
                </span>
            ));
        } else {
            // Single string - repeat multiple times for seamless loop
            return Array.from({ length: 8 }, (_, index) => (
                <span 
                    key={index}
                    className="font-['Space_Grotesk'] text-white uppercase tracking-widest text-lg md:text-xl font-medium px-8 md:px-12"
                >
                    {text}
                </span>
            ));
        }
    };

    return (
        <div className={`w-full overflow-hidden bg-[#4A4139] py-4 ${className}`}>
            <div 
                ref={marqueeRef}
                className="flex whitespace-nowrap animate-marquee"
                style={{
                    '--scroll-duration': '20s'
                }}
            >
                <div className="marquee-content flex items-center">
                    {renderText()}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
