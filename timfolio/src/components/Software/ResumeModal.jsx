import { useEffect, useState } from "react";

const ResumeModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
            setIsLoading(true);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative w-[70%] h-full md:h-[90%] bg-[#FDF7EC] rounded-none md:rounded-lg shadow-2xl overflow-hidden animate-slideIn flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#4A4139]/20">
                    <h2 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#4A4139] tracking-wider">
                        RESUME
                    </h2>
                    <button
                        onClick={onClose}
                        className="group relative p-2 hover:bg-[#FDB50B]/20 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FDB50B]/40"
                        aria-label="Close resume"
                        tabIndex={0}
                    >
                        <div className="relative w-6 h-6">
                            <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#4A4139] transform -translate-y-1/2 rotate-45 transition-transform duration-200 group-hover:scale-110"></span>
                            <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#4A4139] transform -translate-y-1/2 -rotate-45 transition-transform duration-200 group-hover:scale-110"></span>
                        </div>
                    </button>
                </div>
                
                {/* PDF Container */}
                <div className="flex-1 p-4 md:p-6 flex items-center justify-center">
                    <div className="w-full max-w-4xl h-full max-h-[calc(100vh-200px)] bg-white rounded-lg shadow-inner overflow-hidden relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-2 border-[#FDB50B] border-t-transparent rounded-full animate-spin"></div>
                                    <p className="font-['Space_Grotesk'] text-sm text-[#4A4139]">Loading resume...</p>
                                </div>
                            </div>
                        )}
                        <iframe
                            src="/Timfolio/Resume.pdf"
                            className="w-full h-full border-0"
                            title="Timothy Fang Resume"
                            onLoad={handleIframeLoad}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
